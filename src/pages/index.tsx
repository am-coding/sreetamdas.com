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
				I&apos;m a fullstack TypeScript/Go engineer. I utilise technologies like
				React, GraphQL, Apollo, Azure and Express to build applications that
				scale.
			</Paragraph>
			<Paragraph>
				I&apos;m currently a Backend Engineer at{" "}
				<StyledLink target="_blank" href="https://app.cloutwallet.io">
					Cloutwallet{" "}
				</StyledLink>
				working with{" "}
				<TextGradient>
					<Heavy>GraphQL + Node.JS + TypeScript</Heavy>
				</TextGradient>
				, to build scalable Graph solutions from a RESTful Blockchain API and
				solving problems with code and critical thinking.
			</Paragraph>
			{/* <MDXText>
				<Tooling />
			</MDXText>
			<Paragraph>
				I also{" "}
				<span role="img" aria-label="heart">
					❤️
				</span>{" "}
				a lot of other things, in no particular order:
				<br />
				<br />
				CSGO, Reddit, Mechanical Keyboards, Open Source, GitHub, Factorio,
				Tactile Switches, Batman and the Internet!
			</Paragraph> */}
		</Fragment>
	);
};

export default Index;
