/**
 * components/Navbar.ts component
 */
'use client';
import React from 'react';
import { Flex, Img, Logo, NavText, NavbarContainer, UserProfile } from '@/styles/navbarStyles';
import { useAtom } from 'jotai';
import { airdroPoints } from '@/states/atoms';
import Image from 'next/image';

const Navbar: React.FC = () => {
	const [airdropPoints, _] = useAtom(airdroPoints);
	return (
		<NavbarContainer>
			<Logo>
				<Image src={'/logo.svg'} alt='user-avatar' width={200} height={70} />
			</Logo>
			<Flex>
				<Flex>
					<Image src={'/assets/gold.png'} alt='user-avatar' width={20} height={20} />
					<NavText>{airdropPoints.gold}</NavText>
				</Flex>
				<Flex>
					<Image src={'/assets/exp.png'} alt='user-avatar' width={20} height={20} />
					<NavText>{airdropPoints.questExp}</NavText>
				</Flex>
				<UserProfile>
					<Img>
						<Image src={'/assets/avatar.png'} alt='user-avatar' width={40} height={40} />
					</Img>
				</UserProfile>
			</Flex>
		</NavbarContainer>
	);
};

export default Navbar;
