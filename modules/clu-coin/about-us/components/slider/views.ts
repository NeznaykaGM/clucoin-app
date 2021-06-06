import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  position: relative;
  height: auto;
  color: rgb(84, 75, 75);

  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;

  margin: 0 auto;
`;

export const Image = styled.img`
  position: relative;
  padding: 20px;
  width: 100%;
  max-height: 410px;
  border-radius: 25px;
`;

export const SWrapper = styled(Slider)`
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0px);
  min-height: 0px;
  margin: 0 auto;
  display: flex;
  width: 100%;

  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0px;
    height: 100%;
  }

  ${({ theme }) => theme.templates.centerItems}
`;

export const ArrowButton = styled.img`
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  margin: 15px 0 0;
  border-radius: 100%;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  background: ${({ theme }) => theme.colors.pink300};
`;
