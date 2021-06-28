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
				<StyledLink target="_blank" href="https://cryptokek.com/">
					Cryptokek{" "}
				</StyledLink>
				working with{" "}
				<TextGradient>
					<Heavy>Node.JS + TypeScript + Blockchain</Heavy>
				</TextGradient>
				, to build an explorer which can level up your token game.
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
