// styles/HomeStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
	margin-left: 140px;
	margin-right: 140px;
	border: 1px solid #40382c;
	padding: 20px;
	max-height: 700px;
	overflow-y: scroll;
	@media (max-width: 600px) {
		margin-left: 5px;
		margin-right: 5px;
	}
`;

export const LoadingDiv = styled.div`
	text-align: center;
	margin-top: 15px;
	font-size: 18px;
	font-weight: bold;
	color: #ffffff;
`;

export const CardsWrapper = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(3, 1fr); // Three cards in a row

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr); // Two cards in a row on medium screens
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr; // One card in a row on small screens
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	margin: 0;
	color: #333;
`;

export const Description = styled.p`
	font-size: 1.5rem;
	color: #666;
	text-align: center;
	max-width: 600px;
`;
