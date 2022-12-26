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
				I&apos;m a Backend Engineer building scalable and performant
				applications using{" "}
				<TextGradient>
					<Heavy>Node.JS, TypeScript, Go, and PostgreSQL. </Heavy>
				</TextGradient>
				I also have experience with{" "}
				<TextGradient>
					<Heavy>React, Next.JS, and GraphQL </Heavy>
				</TextGradient>
				to build full stack applications.
			</Paragraph>
			<Paragraph>
				I&apos;m currently an Engineer at{" "}
				<StyledLink target="_blank" href="https://brookbushinstitute.com/">
					Brookbush Institute{" "}
				</StyledLink>
				working with{" "}
				<TextGradient>
					<Heavy>Next.JS + Node.JS + TypeScript </Heavy>
				</TextGradient>
				to build the next generation of online education.
			</Paragraph>

			<Paragraph>
				I also enjoy a lot of other things, in no particular order:
				<br />
				<br />
				Nietzsche&apos;s philosophy, mind expanding books, hacking productivity,
				outdoor adventures, exploring new cultures, and learning new things.
			</Paragraph>
		</Fragment>
	);
};

export default Index;
