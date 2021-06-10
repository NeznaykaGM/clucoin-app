import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
// views
import { Image, Title, Wrapper } from '@md-modules/clu-coin/home/components/pages/interface/views';

const Interface = () => {
  const [isUserSeeImage, setIsUserSeeImage] = React.useState(false);
  const [isUserSeeText, setisUserSeeText] = React.useState(false);

  return (
    <Wrapper>
      <Waypoint onEnter={() => setisUserSeeText(true)}>
        <Title isUserSeeText={isUserSeeText}>Our application have a very user-friendly interface</Title>
      </Waypoint>
      <Waypoint onEnter={() => setIsUserSeeImage(true)}>
        <Image isUserSeeImage={isUserSeeImage} src='/static/images/interf.png' alt='interface' />
      </Waypoint>
    </Wrapper>
  );
};

export default Interface;
