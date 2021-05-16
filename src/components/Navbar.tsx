import { useRouter } from "next/router";
import React, {
	useState,
	useEffect,
	useContext,
	Fragment,
	cloneElement,
} from "react";
import {
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaEnvelope,
	FaSpotify,
	FaDiscord,
} from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import styled from "styled-components";

import { FoobarContext } from "components/foobar";
import { IconContainer, NextIconLink } from "styles/blog";
import { LinkTo } from "styles/typography";
import { TGlobalThemeObject } from "typings/styled";
import { checkIfNavbarShouldBeHidden } from "utils/misc";

const NavbarWithLogo = styled.div`
	padding: 20px 0;
	display: grid;
	grid-template-columns: repeat(2, auto);
	align-content: center;
	gap: 1rem;
`;

const NavbarWithNavs = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
	grid-column-gap: 1rem;
	white-space: nowrap;
	justify-self: end;
	place-items: center;
	justify-content: center;
`;

const NavLink = styled(LinkTo)`
	border: none !important;
	color: var(--color-primary);

	&:hover {
		color: var(--color-primary-accent);
	}
`;

export const Navbar = ({
	currentTheme,
}: {
	currentTheme: TGlobalThemeObject["theme"];
}) => {
	const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
	const [isNavbarShown, setIsNavbarShown] = useState(true);
	const { updateFoobarDataPartially, ...foobar } = useContext(FoobarContext);
	const { pathname } = useRouter();

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue: "light" | "dark" = root.style.getPropertyValue(
			"--initial-color-mode"
		) as "light" | "dark";
		setDarkTheme(initialColorValue === "dark");
	}, []);

	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				document.documentElement.setAttribute(
					"data-theme",
					foobar.konami ? "batman" : "dark"
				);
				window.localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.removeAttribute("data-theme");
				window.localStorage.setItem("theme", "light");
			}
		}
	}, [darkTheme, foobar.konami]);

	useEffect(() => {
		if (currentTheme) setDarkTheme(currentTheme === "dark");
	}, [currentTheme]);

	useEffect(() => {
		const handleKeyboardDarkModeToggle = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === "l" && event.shiftKey && event.metaKey) {
				event.preventDefault();
				setDarkTheme(!darkTheme);
			}
		};
		window.addEventListener("keydown", handleKeyboardDarkModeToggle);

		return () => {
			window.removeEventListener("keydown", handleKeyboardDarkModeToggle);
		};
	}, [darkTheme]);

	useEffect(() => {
		setIsNavbarShown(!checkIfNavbarShouldBeHidden(pathname.slice(1)));
	}, [pathname]);

	const handleThemeSwitch = (event: React.MouseEvent) => {
		event.preventDefault();
		setDarkTheme(!darkTheme);
	};

	return isNavbarShown ? (
		<Fragment>
			<NavbarWithLogo>
				<NextIconLink href="/">
					<img src="/logo.png" alt="logo" height="50px" width="50px" />
				</NextIconLink>
				<NavbarWithNavs>
					<NavLink href="/blog">blog</NavLink>
					<NavLink href="/work">work</NavLink>
					<NavLink href="/about">about</NavLink>
					<IconContainer
						href="https://github.com/am-coding"
						target="_blank"
						rel="noopener noreferrer"
						$styledOnHover
					>
						<FaGithub
							aria-label="Amrik's GitHub"
							title="Amrik Malhans' GitHub"
						/>
					</IconContainer>
					<IconContainer
						href="https://twitter.com/am_coding"
						target="_blank"
						rel="noopener noreferrer"
						$styledOnHover
					>
						<FaTwitter
							aria-label="Amrik Malhans' Twitter"
							title="Amrik Malhans' Twitter"
						/>
					</IconContainer>
					{/* <IconContainer
						href="https://amrikmalhans.com/rss/feed.xml"
						$styledOnHover
					>
						<FiRss aria-label="Blog RSS feed" title="Blog RSS feed" />
					</IconContainer> */}
					<IconContainer onClick={handleThemeSwitch} href="#">
						{darkTheme === undefined ? (
							<div style={{ width: "25px" }} />
						) : darkTheme ? (
							<IoMdMoon
								aria-label="Switch to Light Mode"
								title="Switch to Light Mode"
							/>
						) : (
							<FiSun
								aria-label="Switch to Dark Mode"
								title="Switch to Dark Mode"
							/>
						)}
					</IconContainer>
				</NavbarWithNavs>
			</NavbarWithLogo>
		</Fragment>
	) : null;
};

type TExternalLinksArray = Array<{
	link: string;
	title: string;
	icon: JSX.Element;
}>;
export const ExternalLinksOverlay = () => {
	const externalLinks: TExternalLinksArray = [
		{
			link: "https://github.com/am-coding",
			title: "Amrik Malhans' GitHub",
			icon: <FaGithub />,
		},
		{
			link: "https://twitter.com/am_coding",
			title: "Amrik Malhans' Twitter",
			icon: <FaTwitter />,
		},
		// {
		// 	link: "https://stackoverflow.com/users/5283213",
		// 	title: "Amrik Malhans' StackOverflow",
		// 	icon: <FaStackOverflow />,
		// },
		{
			link: "https://www.linkedin.com/in/amrik-malhans-11a150193/",
			title: "Amrik Malhans' LinkedIn",
			icon: <FaLinkedin />,
		},
		{
			link: "mailto:amrikdeveloper@gmail.com",
			title: "Send email to Amrik Malhans",
			icon: <FaEnvelope />,
		},
		// {
		// 	link: "https://giphy.com/gifs/LrmU6jXIjwziE/tile",
		// 	title: "Amrik Malhans' Reddit",
		// 	icon: <FaRedditAlien />,
		// },
		{
			link:
				"https://open.spotify.com/user/t6sk1wcc04sm2z5rp65kzic4n?si=5b65d296f5604b7c",
			title: "Amrik Malhans' Spotify",
			icon: <FaSpotify />,
		},
		{
			link: " https://discord.gg/3Ks7sMA",
			title: "Join Amrik Malhans' Discord server",
			icon: <FaDiscord />,
		},
	];

	const IconWithProps = ({
		icon,
		title,
	}: {
		icon: JSX.Element;
		title: string;
	}) => cloneElement(icon, { title });

	return (
		<NavbarWithNavs>
			{externalLinks.map(({ link, title, icon }) => (
				<IconContainer
					href={link}
					title={title}
					key={title}
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconWithProps {...{ icon, title }} />
				</IconContainer>
			))}
		</NavbarWithNavs>
	);
};
