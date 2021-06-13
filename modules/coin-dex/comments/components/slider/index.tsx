import React from 'react';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// components
import Card from '@md-modules/coin-dex/comments/components/card';
// views
import { ArrowButton, Dot, SliderWrapper, SWrapper, Wrapper } from './views';

interface Props {
  comments: {
    id: string;
    src: string;
    name: string;
    rating: string;
    comment: string;
  }[];
}

const CommentsSlider: React.FC<Props> = ({ comments }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderSetting = {
    dots: true,
    customPaging: (i: number) => {
      return (
        <a>
          <Dot active={i === currentSlide} />
        </a>
      );
    },
    beforeChange: (prev: number, next: number) => {
      setCurrentSlide(next);
    },
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <ArrowButton src='/static/icons/right-arrow.svg' />,
    prevArrow: <ArrowButton src='/static/icons/left-arrow.svg' />
  };

  return (
    <Wrapper>
      <SliderWrapper>
        <SWrapper {...sliderSetting}>
          {comments.map((comment) => (
            <Card
              rating={comment.rating}
              text={comment.comment}
              key={comment.id}
              name={comment.name}
              src={comment.src}
            />
          ))}
        </SWrapper>
      </SliderWrapper>
    </Wrapper>
  );
};

export default CommentsSlider;
