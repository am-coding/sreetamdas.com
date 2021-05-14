import Link from "next/link";
import React, { RefObject } from "react";
import { FaArrowRight, FaLongArrowAltUp, FaTwitter } from "react-icons/fa";

import {
	ButtonUnstyled,
	Card,
	IconContainer,
	PostNotPublishedWarning,
	ReadMorePrompt,
} from "styles/blog";
import { BlogPostPreviewTitle, Datestamp, SmallText } from "styles/typography";
import { TBlogPost } from "typings/blog";
import { useHover } from "utils/hooks";

export const ShareLinks = (post: TBlogPost) => {
	const tweetShareURL = `https://twitter.com/intent/tweet?text=Check out: ${post.title}&url=https://amrikmalhans.com/blog/${post.slug}%0D%0A&via=am_coding`;

	return (
		<IconContainer
			href={tweetShareURL}
			target="_blank"
			rel="noopener noreferrer"
		>
			<FaTwitter aria-label="Share on Twitter" />
		</IconContainer>
	);
};

export const ScrollToTop = ({
	topRef,
}: {
	topRef: RefObject<HTMLDivElement>;
}) => {
	const scrollToTop = () => {
		if (topRef) topRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<ButtonUnstyled onClick={scrollToTop}>
			back to the top
			<FaLongArrowAltUp style={{ fontSize: "20px" }} />
		</ButtonUnstyled>
	);
};

export const BlogPostPreview = ({ post }: { post: TBlogPost }) => {
	const [hoverRef, isHovered] = useHover();

	return (
		<Link href={`/blog/${post.slug}`} scroll={false}>
			<Card ref={hoverRef}>
				<BlogPostPreviewTitle {...{ isHovered }}>
					{post.title}
				</BlogPostPreviewTitle>
				<Datestamp>
					{new Date(post.publishedAt).toLocaleDateString("en-US", {
						month: "long",
						year: "numeric",
						day: "numeric",
					})}
					{!post.published && <PostNotPublishedWarning />}
				</Datestamp>
				<SmallText>{post.summary}</SmallText>
				<ReadMorePrompt {...{ isHovered }}>
					Read more {isHovered && <FaArrowRight style={{ fontSize: "12px" }} />}
				</ReadMorePrompt>
			</Card>
		</Link>
	);
};
