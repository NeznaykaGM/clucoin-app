import React from 'react';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// views
import { ArrowButton, Dot, Image, SliderWrapper, SWrapper, Wrapper } from './views';

interface Props {
  images: {
    id: string;
    src: string;
  }[];
}

const ImagesSlider: React.FC<Props> = ({ images }) => {
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
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <ArrowButton src='/static/icons/right-arrow.svg' />,
    prevArrow: <ArrowButton src='/static/icons/left-arrow.svg' />
  };

  return (
    <Wrapper>
      <SliderWrapper>
        <SWrapper {...sliderSetting}>
          {images.map(({ src, id }) => (
            <Image src={src} key={id} />
          ))}
        </SWrapper>
      </SliderWrapper>
    </Wrapper>
  );
};

export default ImagesSlider;
