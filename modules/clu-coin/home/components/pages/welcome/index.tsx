import React from 'react';
// libs
import { tsParticles } from 'tsparticles';
import { Waypoint } from 'react-waypoint';
// theme
import { theme } from '@md-styles/styled/theme';
// components
import PurchaseCard from '@md-ui/card/purchase-card';
// views
import {
  Canvas,
  Container,
  PinkTitle,
  RightSectionWrapper,
  RWrapper,
  LeftSectionWrapper,
  SubTitle,
  Title,
  Wrapper
} from './views';

const Welcome = () => {
  const [isUserSee, setIsUserSee] = React.useState(false);

  React.useLayoutEffect(() => {
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      backgroundMode: {
        enable: true,
        zIndex: 0
      },
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 450
          }
        },
        color: {
          value: `${theme.colors.pink400}`
        },
        stroke: {
          width: 0
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 2,
          random: true,
          animation: {
            enable: false,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 100,
          color: `${theme.colors.pink100}`,
          opacity: 0.4,
          width: 0.8
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: false,
          straight: false,
          outMode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'connect',
            parallax: {
              enable: false,
              force: 60,
              smooth: 10
            }
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          connect: {
            distance: 80,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          push: {
            quantity: 1
          }
        }
      },
      detectRetina: false,
      background: {
        color: '#000000',
        image: '',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover'
      }
    });

    const particles = tsParticles.domItem(0);

    particles?.play();

    return () => {
      particles?.pause();
    };
  }, []);

  return (
    <Wrapper>
      <Canvas id='tsparticles' />

      <Container>
        <Waypoint onEnter={() => setIsUserSee(true)}>
          <RWrapper>
            <LeftSectionWrapper isUserSee={isUserSee}>
              <Title>
                Best <PinkTitle>Game-Mining</PinkTitle> opportunity
              </Title>

              <SubTitle>
                Download our software, install it and go to CS:GO or other game and start your mining experience!
              </SubTitle>
            </LeftSectionWrapper>

            <RightSectionWrapper isUserSee={isUserSee}>
              <PurchaseCard />
            </RightSectionWrapper>
          </RWrapper>
        </Waypoint>
      </Container>
    </Wrapper>
  );
};

export default Welcome;
