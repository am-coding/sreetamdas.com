import Head from "next/head";

type TDocumentHeadProps = {
	title: string;
	imageURL?: string;
	description?: string;
};

export const DocumentHead = ({
	title,
	imageURL: relativeImageURL,
	description,
}: TDocumentHeadProps) => {
	const pageTitle = `${title} — Amrik Malhans`;
	const imageURL = getAbsoluteURL(relativeImageURL ?? "/Amrik.jpg");
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={pageTitle} />
			<meta name="og:description" content={description} />
			<meta name="og:image" content={imageURL} />
			<meta name="og:image:alt" content={pageTitle} />
			<meta property="og:url" content={process.env.SITE_URL} />
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@am_coding" />
			<meta name="twitter:title" content={pageTitle} />
			<meta
				name="twitter:description"
				content={description ?? "Fullstack TypeScript/Go Engineer from India!"}
			/>
			<meta name="twitter:image" content={imageURL} />
		</Head>
	);
};

export const getAbsoluteURL = (url: string) => `${process.env.SITE_URL}${url}`;
