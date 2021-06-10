import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
import {
  BuyList,
  BuyListItem,
  Container,
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
        <Title>How to Earn Coin DeX software</Title>
        <SubTitle>
          New in game mining earning? Here you can see instruction how you can start your gaming opportunity.
        </SubTitle>
      </TitleWrapper>

      <Container>
        <InfoWrapper isUserSee={isUserSee}>
          <InfoTitleTokenHead>How to install and setup Coin DeX</InfoTitleTokenHead>
          <InfoSubTitleTokenHead>Installation Instructions</InfoSubTitleTokenHead>

          <BuyList>
            <BuyListItem>
              Download the app, <TextPinkListItem> Coin DeX</TextPinkListItem>
            </BuyListItem>
            <BuyListItem>Install it with default settings</BuyListItem>
            <BuyListItem>
              Setup your <TextPinkListItem>wallet address</TextPinkListItem> for withdrawal
            </BuyListItem>
            <BuyListItem>
              Sync your games with our software through button "<TextPinkListItem>Browse</TextPinkListItem>"
            </BuyListItem>
          </BuyList>
          <InfoTitleTokenHead style={{ marginTop: '20px' }}>How to start your Opportunity</InfoTitleTokenHead>

          <BuyList>
            <BuyListItem>
              Start <TextPinkListItem> Coin DeX</TextPinkListItem>
            </BuyListItem>
            <BuyListItem>Be sure, your internet connection is working</BuyListItem>
            <BuyListItem>
              You can start your <TextPinkListItem>Game</TextPinkListItem>
            </BuyListItem>
            <BuyListItem>
              Enjoy your <TextPinkListItem>game</TextPinkListItem> and earnings :)
            </BuyListItem>
          </BuyList>
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
