import styled from "styled-components";

export const Footer = () => {
	return (
		<FooterContent>
			Forked from{" "}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/sreetamdas/sreetamdas.com"
			>
				Sreetamdas
			</a>{" "}
			&bull; Find me on <a href="https://twitter.com/am_coding">Twitter</a>
		</FooterContent>
	);
};

const FooterContent = styled.div`
	font-size: 0.8rem;
`;
