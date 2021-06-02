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
  TokenItemWrapper,
  TokensTitle,
  Wrapper,
  PinkTokeListItem
} from '@md-modules/clu-coin/how-to-earn/components/token-description/views';

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

          <TokenItemWrapper>
            <label>Token Name</label>
            <span>CluCoin</span>
          </TokenItemWrapper>

          <TokenItemWrapper>
            <label>Nominal Price</label>
            <span>1CLU = ???</span>
          </TokenItemWrapper>

          <TokenItemWrapper>
            <label>Total Number of Token Produced</label>
            <span>1,000,000,000,000,000</span>
          </TokenItemWrapper>

          <TokenItemWrapper>
            <label>Burn Smart Contract</label>
            <span>CluCoin</span>
          </TokenItemWrapper>

          <TokenItemWrapper>
            <label>Type of Token</label>
            <span>BEP-20</span>
          </TokenItemWrapper>
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
