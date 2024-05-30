import React from 'react';
import {
	Build,
	CTF,
	CardContainer,
	CardFlex,
	CardInnerContainer,
	CardInnerFlex,
	ImgContainer,
	QuestTitle,
	Solidity,
	SolidityContainer,
	Sword
} from '@/styles/questStyle';
import Image from 'next/image';

const QuestCard: React.FC<{ quest:any }> = (props: any) => {
	const { quest }: any = props;
	return (
		<>
			<CardContainer>
				<CardInnerContainer>
					<ImgContainer>
						<Image src={quest?.cover || '/assets/cover-image.png'} alt='quest-img' width={100} height={86} />
					</ImgContainer>
					<CardFlex>
						<QuestTitle>{quest?.title}</QuestTitle>
						<CardInnerFlex>
							<Image src={'/assets/exp.png'} alt='quest-img-icon' width={20} height={20} />
							<p>{quest?.rewards?.expPoints}</p>
						</CardInnerFlex>
					</CardFlex>
					<CardFlex>
						<SolidityContainer>
							<Solidity>
								<Image src={'/assets/solidity.svg'} alt='solidity' width={20} height={20} />
								<p>Solidity</p>
							</Solidity>
							<Sword>
								{Array.from({ length: quest?.difficulty }, (diff, index) => (
									<Image src={'/assets/sword.svg'} alt='solidity' width={20} height={20} key={index} />
								))}
							</Sword>
							<Build>
								<p>{quest.type.label}</p>
							</Build>
							<CTF>
								<p>CTF</p>
							</CTF>
						</SolidityContainer>
						<CardInnerFlex>
							<Image src={'/assets/gold.png'} alt='quest-img-icon' width={20} height={20} />
							<p>{quest?.rewards?.gold}</p>
						</CardInnerFlex>
					</CardFlex>
				</CardInnerContainer>
			</CardContainer>
		</>
	);
};

export default QuestCard;
