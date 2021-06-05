import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.templates.centerContent};
  flex-direction: column;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  position: relative;
  justify-content: center;
  padding: 75px 0 50px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 25px;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 18px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;

export const SubTitle = styled.p`
  max-width: 580px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
