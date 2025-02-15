/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import Link from "next/link";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { PaddingListItems } from "styles/typography";

export const removeListStyleMixin = css`
	& ul {
		list-style: none;
		padding-left: 30px;
	}
`;

export const BlogPostMDXContent = styled(PaddingListItems)`
	padding: 30px 0;
`;

export const Card = styled.div`
	padding: 10px 0;
	cursor: pointer;
`;

export const WarningSpan = styled.span`
	padding: 5px 10px;
	margin: 0 15px;
	background-color: red;
	color: white;
	border-radius: var(--border-radius);
`;

export const PostNotPublishedWarning = () => {
	return <WarningSpan>UNPUBLISHED</WarningSpan>;
};

export const PostMetaDataGrid = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 0.5rem;
	justify-content: start;
	align-items: center;
`;

export const RoundedImageSmall = styled.img`
	height: 25px;
	border-radius: 50%;
`;

export const StyledPre = styled.pre`
	background-color: var(--color-inlineCode-bg);
	margin: 0;
	padding: 15px;
	border-radius: var(--border-radius);
	font-size: 14px;
`;

export const IconContainer = styled.a<{ $styledOnHover?: boolean }>`
	font-size: 25px;

	${({ $styledOnHover }) =>
		$styledOnHover
			? css`
					color: var(--color-primary);
					:hover {
						color: var(--color-primary-accent);
					}
			  `
			: css`
					color: var(--color-primary-accent);
			  `}
`;

export const LinkedHeaderIconWrapper = styled.a<{ isHovered: boolean }>`
	color: var(--color-primary-accent);
	position: absolute;
	transform: translateX(-125%) translateY(0.2rem);
	font-size: inherit;

	opacity: ${({ isHovered }) => (isHovered ? 0.75 : 0)};
	transition: opacity 200ms ease;
`;

export const NextIconLink = ({
	children,
	href,
}: PropsWithChildren<{ href: string }>) => {
	return (
		<Link href={href} passHref>
			<IconContainer href={href} tabIndex={0}>
				{children}
			</IconContainer>
		</Link>
	);
};

export const CustomBlockquote = styled.aside<{ type?: string }>`
	padding: 20px;
	margin: 20px 0;
	border-radius: var(--border-radius);

	${({ type }) =>
		type
			? `
				background-color: var(--color-${type}-accent-faded);
				border-left: 0.3em var(--color-${type}-accent) solid;
			  `
			: css`
					background-color: var(--color-info-accent-faded);
					border-left: 0.3em var(--color-info-accent) solid;
			  `}
`;

export const Highlight = styled.span`
	color: var(--color-primary-accent);
	font-style: italic;
	font-weight: bold;
`;

export const ReadMorePrompt = styled.p<{ isHovered: boolean }>`
	font-weight: bold;
	font-size: 0.8rem;
	margin: 0;
	color: ${({ isHovered }) =>
		isHovered ? "var(--color-primary-accent)" : null};
`;

const EndLinksGrid = styled.div`
	padding-top: 15px;
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	color: var(--color-primary-accent);

	& * {
		cursor: pointer;
	}
`;

export const EndLinks = ({ children }: PropsWithChildren<{}>) => (
	<EndLinksGrid>{children}</EndLinksGrid>
);

export const Button = styled.button`
	font-size: 18px;
	cursor: pointer;
	background-color: var(--color-background);
	padding: 10px 15px;
	border-radius: var(--border-radius);
	border: 2px solid var(--color-primary-accent);
	color: var(--color-primary);

	&:hover {
		background-color: var(--color-primary-accent);
		color: var(--color-background);
	}
`;

export const ButtonUnstyled = styled.button`
	background-color: transparent;
	border: none;
	color: inherit;
`;
