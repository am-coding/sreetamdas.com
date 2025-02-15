import { GetStaticProps } from "next";
import React, { Fragment } from "react";

import { BlogPostPreview } from "components/blog";
import { generateRssFeed } from "components/blog/rss";
import { DocumentHead } from "components/shared/seo";
import { BlogPostsPreviewLayout, Center } from "styles/layouts";
import { Title } from "styles/typography";
import { TBlogPost } from "typings/blog";
import { getBlogPostsData } from "utils/blog";

const Index = ({ postsData }: { postsData: Array<TBlogPost> }) => {
	return (
		<Fragment>
			<DocumentHead title="Blog" />
			<Center>
				<Title size={5}>/blog</Title>
			</Center>

			<BlogPostsPreviewLayout>
				{postsData?.map((post, index) => (
					<BlogPostPreview {...{ post }} key={index} />
				))}
			</BlogPostsPreviewLayout>
		</Fragment>
	);
};

export const getStaticProps: GetStaticProps = async (_context) => {
	const postsData: Array<TBlogPost> = await getBlogPostsData();
	await generateRssFeed();

	return {
		props: { postsData },
	};
};

export default Index;
