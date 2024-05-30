// styles/NavbarStyles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	width: 100%;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const Logo = styled.div`
	font-size: 1rem;
	font-weight: bold;
	color: #333;
`;

export const UserProfile = styled.div`
  margin-left: 10px;
	cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
	align-items: center;
	gap: 10px;
	justify-content: center;
`;

export const NavText = styled.p`
	font-size: 14px;
	font-weight: bold;
	line-height: 16px;
	color: #b69e72;
`;

export const Img = styled.div`
	border: 1px solid #212121;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border-radius: 100%;

	img {
		border-radius: 100%;
		border: 1px solid #b69e72;
	}
`;