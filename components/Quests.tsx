'use client';
import React from 'react';
import QuestCard from './QuestCard';
import { useQuests } from '@/hooks/useQuests';
import { CardsWrapper, Container, LoadingDiv } from '@/styles/homePageStyles';
import Link from 'next/link';

const Quests: React.FC = () => {
	const { data: quests, error: questsError, isLoading: questsLoading } = useQuests();

	
	return (
		<>
			{questsLoading ? (
				<LoadingDiv>fetching....</LoadingDiv>
			) : (
				<Container>
					<CardsWrapper>
						{quests?.map((quest: any, index) => (
							<Link href={`/${quest.slug}`} key={index}>
								<QuestCard quest={quest} />
							</Link>
						))}
					</CardsWrapper>
				</Container>
			)}
		</>
	);
};

export default Quests;
