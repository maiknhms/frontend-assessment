'use client';
import React from 'react';
import { CardFlex, CardInnerFlex, QuestTitle, Solidity, SolidityContainer, Sword } from '@/styles/questStyle';
import {
	AirDropButton,
	BackButton,
	CardContainer,
	DescriptionContainer,
	DetailCard,
	ImgDetailContainer
} from '@/styles/questDetailStyle';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { useQuest } from '@/hooks/useQuests';
import { LoadingDiv } from '@/styles/homePageStyles';
import { airdroPoints } from '@/states/atoms';
import Image from 'next/image';

const Quest: React.FC<{ slug: string }> = (props: any) => {
	const { slug } = props;
	const [_, setAirdropPoints] = useAtom(airdroPoints);
	const { data, error: questError, isLoading: questLoading } = useQuest(slug || '');
	const quest: any = data;

	const handleAirdrop = (exp: any, gold: any) => {
		setAirdropPoints((prevPoints) => ({
			...prevPoints,
			questExp: prevPoints.questExp + exp,
			gold: prevPoints.gold + gold // Example: increase gold by 50
		}));
	};

	if (questLoading) return <LoadingDiv>Loading...</LoadingDiv>;
	return (
		<CardContainer>
			<DetailCard>
				<ImgDetailContainer>
					<Image src={quest?.cover || '/assets/cover-image.png'} alt='quest-img' width={100} height={186} />
				</ImgDetailContainer>
				<QuestTitle>{quest?.title}</QuestTitle>
				<CardFlex>
					<SolidityContainer>
						<Solidity>
							<Image src={'/assets/solidity.svg'} alt='solidity' width={20} height={20} />
							<p>Solidity</p>
						</Solidity>
						<Sword>
							{Array.from({ length: quest?.difficulty }, (diff) => (
								<Image src={'/assets/sword.svg'} alt='solidity' width={20} height={20} />
							))}
						</Sword>
					</SolidityContainer>
					<CardInnerFlex>
						<CardInnerFlex>
							<Image src={'/assets/gold.png'} alt='quest-img-icon' width={20} height={20} />
							<p>{quest?.rewards?.gold}</p>
						</CardInnerFlex>
						<CardInnerFlex>
							<Image src={'/assets/exp.png'} alt='quest-img-icon' width={20} height={20} />
							<p>{quest?.rewards?.expPoints}</p>
						</CardInnerFlex>
					</CardInnerFlex>
				</CardFlex>
				<DescriptionContainer>
					<p>{quest?.description}</p>
				</DescriptionContainer>
				<CardFlex>
					<Link href='/'>
						<BackButton>
							<p>Go Back</p>
						</BackButton>
					</Link>
					<AirDropButton onClick={() => handleAirdrop(quest?.rewards?.expPoints, quest?.rewards?.gold)}>
						<p>Airdrop rewards to The Guardian</p>
					</AirDropButton>
				</CardFlex>
			</DetailCard>
		</CardContainer>
	);
};

export default Quest;
