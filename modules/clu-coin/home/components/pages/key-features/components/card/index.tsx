import React from 'react';
// libs
import ReactCardFlip from 'react-card-flip';
// views
import {
  ContentWrapper,
  Image,
  SubTitle,
  Title,
  Content,
  Wrapper
} from '@md-modules/clu-coin/home/components/pages/key-features/components/card/views';

interface Props {
  src?: string;
  title: string;
  subTitle: string;
}

const InfoCard: React.FC<Props> = ({ src, title, subTitle }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggle = () => setIsFlipped((prevState) => !prevState);

  return (
    <Wrapper onMouseEnter={toggle} onMouseLeave={toggle}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Content>
          <Image src={src} alt='icon' />

          <ContentWrapper>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </ContentWrapper>
        </Content>

        <Content>TWO</Content>
      </ReactCardFlip>
    </Wrapper>
  );
};

export default InfoCard;
