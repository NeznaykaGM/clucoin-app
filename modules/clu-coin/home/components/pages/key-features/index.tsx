import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
// constants
import { partnersState } from '@md-modules/clu-coin/home/components/pages/key-features/constants';
// views
import {
  Title,
  Wrapper,
  PinkTitle,
  SubTitle,
  ContentWrapper,
  CardsWrapper,
  Image
} from '@md-modules/clu-coin/home/components/pages/key-features/views';

const KeyFeatures = () => {
  const [isUserSee, setIsUserSee] = React.useState(false);

  return (
    <Wrapper>
      <ContentWrapper isUserSee={isUserSee}>
        <PinkTitle>
          Our <Title>Partners</Title>
        </PinkTitle>

        <SubTitle>
          We have been on the market for a long time and have already managed to enter into cooperation with large
          companies, such as:
        </SubTitle>
      </ContentWrapper>

      <Waypoint onEnter={() => setIsUserSee(true)}>
        <CardsWrapper isUserSee={isUserSee}>
          {partnersState.map((i) => (
            <a key={i.id} href={i.url}>
              <Image src={i.src} />
            </a>
          ))}
        </CardsWrapper>
      </Waypoint>
    </Wrapper>
  );
};

export default KeyFeatures;
