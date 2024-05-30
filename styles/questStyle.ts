import styled from 'styled-components';

export const CardContainer = styled.div`
	max-width: 708px;
	height: 230px;
	padding: 15px;
	border-radius: 10px;
	border: 1px solid #212121;
`;

export const CardInnerContainer = styled.div``;

export const ImgContainer = styled.div`
	img {
		width: 100%;
		height: 86px;
		border-radius: 20px;
	}
`;

export const QuestTitle = styled.h1`
	font-weight: bold;
	font-size: 18px;
	color: #cccccc;
`;

export const CardFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardInnerFlex = styled.div`
	display: flex;
	gap: 7px;
	align-items: center;

	img : {
		flex: 1;
	}

	p {
		font-size: 14px;
		font-weight: bold;
		color: #cccccc;
		flex: 1;
		width: 40px;
	}
`;

export const Solidity = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border: 1px solid #212121;
	padding-right: 7px;
	padding-left: 7px;
	height: 40px;

	p {
		font-size: 14px;
		font-weight: normal;
		color: #cccccc;
	}
`;

export const Sword = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border: 1px solid #212121;
	height: 40px;
	padding-right: 7px;
	padding-left: 7px;
`;

export const Build = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border: 1px solid #212121;
	padding-right: 7px;
	padding-left: 7px;
	height: 40px;

	p {
		font-size: 14px;
		font-weight: normal;
		color: #cccccc;
	}
`;

export const CTF = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border: 1px solid #212121;
	padding-right: 7px;
	padding-left: 7px;
	height: 40px;

	p {
		font-size: 14px;
		font-weight: normal;
		color: #cccccc;
	}
`;

export const SolidityContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
