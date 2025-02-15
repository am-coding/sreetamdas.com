import {
	PropsWithChildren,
	HTMLAttributes,
	Key,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import styled, { keyframes, CSSProperties, css } from "styled-components";

const range = (start: number, end?: number, step = 1) => {
	const output = [];
	if (typeof end === "undefined") {
		end = start;
		start = 0;
	}
	for (let i = start; i < end; i += step) {
		output.push(i);
	}
	return output;
};
const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min;
const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";
const getInitialState = () => {
	// For our initial server render, we won't know if the user
	// prefers reduced motion, but it doesn't matter. This value
	// will be overwritten on the client, before any animations
	// occur.
	return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		getInitialState
	);
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(!event.matches);
		};

		mediaQueryList.addListener(listener);
		return () => {
			mediaQueryList.removeListener(listener);
		};
	}, []);
	return prefersReducedMotion;
}
const useRandomInterval = (
	callback: () => void,
	minDelay: null | number,
	maxDelay: null | number
) => {
	const timeoutId = useRef<any>(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	});
	useEffect(() => {
		if (typeof minDelay === "number" && typeof maxDelay === "number") {
			const handleTick = () => {
				const nextTickAt = random(minDelay, maxDelay);
				timeoutId.current = window.setTimeout(() => {
					savedCallback.current();
					handleTick();
				}, nextTickAt);
			};
			handleTick();
		}

		return () => window.clearTimeout(timeoutId.current);
	}, [minDelay, maxDelay]);
	const cancel = useCallback(function () {
		window.clearTimeout(timeoutId.current);
	}, []);
	return cancel;
};

type TSparkle = {
	id: string;
	createdAt: number;
	key: Key;
	color: string;
	size: number;
	style: CSSProperties;
};
const DEFAULT_COLOR = "#FFFF00";
const generateSparkle = (color: string): Omit<TSparkle, "key"> => {
	const sparkle = {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		color,
		size: random(10, 20),
		style: {
			top: random(0, 100) + "%",
			left: random(0, 100) + "%",
		},
	};
	return sparkle;
};
const Sparkles = ({
	color = DEFAULT_COLOR,
	children,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
	const [sparkles, setSparkles] = useState(() => {
		return range(3).map(() => generateSparkle(color));
	});
	const prefersReducedMotion = usePrefersReducedMotion();
	useRandomInterval(
		() => {
			const sparkle = generateSparkle(color);
			const now = Date.now();
			const nextSparkles = sparkles.filter((sp) => {
				const delta = now - sp.createdAt;
				return delta < 750;
			});
			nextSparkles.push(sparkle);
			setSparkles(nextSparkles);
		},
		prefersReducedMotion ? null : 50,
		prefersReducedMotion ? null : 450
	);
	return (
		<Wrapper {...props}>
			{sparkles.map((sparkle) => (
				<Sparkle
					key={sparkle.id}
					color={sparkle.color}
					size={sparkle.size}
					style={sparkle.style}
				/>
			))}
			<ChildWrapper>{children}</ChildWrapper>
		</Wrapper>
	);
};

const Sparkle = ({
	size,
	color,
	style,
}: Pick<TSparkle, "size" | "color" | "style">) => {
	const path =
		"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";
	return (
		<SparkleWrapper style={style}>
			<SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
				<path d={path} fill={color} />
			</SparkleSvg>
		</SparkleWrapper>
	);
};
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.span`
	display: inline-block;
	position: relative;
`;
const SparkleWrapper = styled.span`
	position: absolute;
	display: block;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${comeInOut} 700ms forwards;
	}
`;
const SparkleSvg = styled.svg`
	display: block;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${spin} 700ms linear;
	}
`;
const ChildWrapper = styled.span`
	position: relative;
	z-index: 2;
`;

export { Sparkles };

export const buttonStylesMixin = css`
	margin: 0;
	padding: 0.5rem;
	width: auto;
	line-height: 35px;
	text-decoration: none;
	border-radius: var(--border-radius);
	border: 2px solid var(--color-primary-accent);
	background-color: var(--color-primary-accent);
	color: var(--color-background);
	cursor: pointer;
`;

const SupportLinkStyled = styled.a`
	${buttonStylesMixin}

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr));
	gap: 0.5rem;
	grid-auto-flow: column;
	align-items: center;

	& img {
		box-shadow: none;
		border: none;
		vertical-align: middle;
	}
`;

const SupportLinkWrapper = styled.div`
	display: grid;
	width: max-content;
`;

export const SupportSreetamDas = () => {
	return (
		<SupportLinkWrapper>
			<SupportLinkStyled
				href="https://buymeacoff.ee/sreetamdas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
					alt="Buy Sreetam Das a coffee"
				/>
				Buy me a coffee
			</SupportLinkStyled>
		</SupportLinkWrapper>
	);
};
