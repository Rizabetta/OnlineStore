import styled from 'styled-components';

export const Box = styled.div`

background: #212529;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 12%;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 6px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: #75c1ff;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #fff;
font-weight: bold;
margin-top: 6px;
margin-bottom: 6px;
`;
