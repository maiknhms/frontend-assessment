import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 70px;
`;

export const DetailCard = styled.div`
	max-width: 729px;
	border: 1px solid #212121;
	margin-left: 10px;
	margin-right: 10px;
	padding: 15px;
	border-radius: 10px;
`;

export const ImgDetailContainer = styled.div`
	img {
		width: 100%;
		height: 186px;
		border-radius: 20px;
	}
`;

export const DescriptionContainer = styled.div`
	p {
		font-size: 14px;
		font-weight: normal;
		text-align: justify;
		color: #7c7c7c;
	}
`;

export const BackButton = styled.button`
	width: 160px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 42px;
	border: 1px solid #212121;
	background: transparent;
	border-radius: 10px;
	cursor: pointer;
	p {
		font-size: 16px;
		font-weight: bold;
		color: #b69e72;
	}
`;

export const AirDropButton = styled.button`
	width: 358px;
	height: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 7px;
	border: 1px solid #b69e72;
	background: #b69e72;
	padding: 3px;
	cursor: pointer;
	p {
		font-size: 18px;
		font-weight: bold;
		color: #080808;
	}
`;
