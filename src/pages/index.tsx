import React, { Fragment } from "react";

import { DocumentHead } from "components/shared/seo";
import { Center } from "styles/layouts";
import {
	TextGradient,
	Heavy,
	Title,
	Paragraph,
	StyledLink,
} from "styles/typography";

const Index = () => {
	return (
		<Fragment>
			<DocumentHead title="Home" />

			<Center>
				<Title size={3}>Hey, I&apos;m Amrik Malhans! </Title>
			</Center>
			<Paragraph>
				I&apos;m a Backend Engineer and I utilise tech like TypeScript, Go,
				Node.JS, GraphQL and PostgreSQL to build APIs that scale. I also hold
				experience with Web3 and Blockchain technologies.
			</Paragraph>
			<Paragraph>
				I&apos;m currently a Backend Engineer at{" "}
				<StyledLink target="_blank" href="https://cryptokek.com/">
					Cryptokek{" "}
				</StyledLink>
				working with{" "}
				<TextGradient>
					<Heavy>Node.JS + TypeScript + Web3 </Heavy>
				</TextGradient>
				to build a token and chain explorer.
			</Paragraph>

			<Paragraph>
				I also enjoy a lot of other things, in no particular order:
				<br />
				<br />
				Philosophy, Books, Mechanical Keyboards, Crypto, Metal Music, and
				soccer!
			</Paragraph>
		</Fragment>
	);
};

export default Index;
