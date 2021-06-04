import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
import {
  BuyList,
  BuyListItem,
  Container,
  FooterInfoWrapper,
  InfoSubTitleTokenHead,
  InfoTitleTokenHead,
  InfoWrapper,
  RightSectionWrapper,
  SubTitle,
  TextPinkListItem,
  Title,
  TitleWrapper,
  Wrapper
} from './views';
import PurchaseCard from '@md-ui/card/purchase-card';

const TokenInfo = () => {
  const [isUserSee, setIsUserSee] = React.useState(false);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>CluCoin Smart Token</Title>
        <SubTitle>
          New to investing in Crypto? This section will guide you how to purchase CluCoin. We'll continue to add market
          specific instructions as we expand.
        </SubTitle>
      </TitleWrapper>

      <Container>
        <InfoWrapper isUserSee={isUserSee}>
          <InfoTitleTokenHead>How to Buy CluCoin</InfoTitleTokenHead>
          <InfoSubTitleTokenHead>PancakeSwap Instructions</InfoSubTitleTokenHead>

          <BuyList>
            <BuyListItem>
              Download the app, <TextPinkListItem>Trust Wallet</TextPinkListItem>
            </BuyListItem>
            <BuyListItem>Purchase BNB or BSC</BuyListItem>
            <BuyListItem>
              Go to the <TextPinkListItem>DApps</TextPinkListItem> tab at the bottom, and find{' '}
              <TextPinkListItem>PancakeSwap</TextPinkListItem>. Iphone users may need to enable the trust browser, then
              use the browser tab. You can also click the BUY NOW button on our website if you're not on mobile.
            </BuyListItem>
            <BuyListItem>
              Click "<TextPinkListItem>Select a currency</TextPinkListItem>" and enter this contract address into the
              search field, and you should be able to find CluCoin.
            </BuyListItem>
            <BuyListItem>Before swapping, click on the cog wheel and set the slippage to between 11-12%</BuyListItem>
            <BuyListItem>
              Now, set the amount you want to purchase and press the <TextPinkListItem>swap</TextPinkListItem> button.
              Confirm the transaction and...
            </BuyListItem>
          </BuyList>
          <FooterInfoWrapper>HODL!</FooterInfoWrapper>
        </InfoWrapper>

        <Waypoint onEnter={() => setIsUserSee(true)}>
          <RightSectionWrapper isUserSee={isUserSee}>
            <PurchaseCard />
          </RightSectionWrapper>
        </Waypoint>
      </Container>
    </Wrapper>
  );
};

export default TokenInfo;
