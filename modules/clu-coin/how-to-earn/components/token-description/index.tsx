import React from 'react';
import {
  DistributionProceedsWrapper,
  DistributionRightTitle,
  DistributionLeftTitle,
  DistributionWrapper,
  Title,
  TitleWrapper,
  TokeList,
  TokeListItem,
  TokenInformationWrapper,
  TokensTitle,
  Wrapper,
  PinkTokeListItem
} from '@md-modules/clu-coin/how-to-earn/components/token-description/views';
import TokenItem from '@md-modules/clu-coin/how-to-earn/components/token-description/components/token-item';

const TokenDescription = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Token Distribution</Title>
      </TitleWrapper>

      <DistributionWrapper>
        <DistributionProceedsWrapper>
          <DistributionLeftTitle>Use of Proceeds</DistributionLeftTitle>
          <TokeList>
            <TokeListItem>Charity</TokeListItem>
            <TokeListItem>Marketing</TokeListItem>
            <TokeListItem>Exchange Integration</TokeListItem>
            <TokeListItem>Exchange Launch</TokeListItem>
          </TokeList>
        </DistributionProceedsWrapper>

        <TokenInformationWrapper>
          <TokensTitle>Information About Tokens</TokensTitle>

          <TokenItem title='Token Name' subTitle='CluCoin' />
          <TokenItem title='Nominal Price' subTitle='1,000,000,000,000,000' />
          <TokenItem title='Total Number of Token Produced' subTitle='CluCoin' />
          <TokenItem title='Burn Smart Contract' subTitle='CluCoin' />
          <TokenItem title='Type of Token' subTitle='BEP-20' />
        </TokenInformationWrapper>

        <DistributionProceedsWrapper>
          <DistributionRightTitle>Token Distribution</DistributionRightTitle>
          <TokeList>
            <p>1 Quadrillion CluCoin in Total Supply</p>
            <p>200T Pre-launch</p>
            <PinkTokeListItem>100T Community Wallet</PinkTokeListItem>
            <p>100T Charity Wallet</p>
            <p>375T Burned</p>
            <p>125T Pancakeswap</p>
            <p>99T Team Wallet</p>
            <p>1T Mod Wallet</p>
          </TokeList>
        </DistributionProceedsWrapper>
      </DistributionWrapper>
    </Wrapper>
  );
};

export default TokenDescription;
