import styled from 'styled-components';

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div<{ isUserSee: boolean }>`
  padding-right: 15px;
  padding-left: 15px;

  transition: opacity 1s ease;
  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};
  animation: ${({ isUserSee }) => (isUserSee ? 'leftSlideIn 1s forwards' : 'none')};

  @keyframes leftSlideIn {
    0% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 8rem;
  min-height: 600px;

  &::before {
    content: ' ';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 85%;
    background: url(/static/images/robot.png) left center no-repeat;
    background-size: 300px;
    opacity: 0.2;
  }

  @media screen and (max-width: 1250px) {
    padding: 10px;
    overflow: visible;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const InfoTitleTokenHead = styled.p`
  color: ${({ theme }) => theme.colors.pink300};
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 5px;
  letter-spacing: 2px;

  @media (max-width: 1250px) {
    text-align: center;
  }
`;

export const InfoSubTitleTokenHead = styled.p`
  color: ${({ theme }) => theme.colors.pink300};
  font-weight: 700;

  @media (max-width: 1250px) {
    text-align: center;
  }
`;

export const BuyList = styled.ol`
  @media (max-width: 1250px) {
    ${({ theme }) => theme.templates.centerItems};
    flex-direction: column;
  }
`;

export const BuyListItem = styled.li`
  max-width: 545px;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.p`
  max-width: 580px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TextPinkListItem = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pink300};
`;

export const RightSectionWrapper = styled.div<{ isUserSee: boolean }>`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;

  transition: opacity 1s ease;
  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};
  animation: ${({ isUserSee }) => (isUserSee ? 'rightSlideIn 1s forwards' : 'none')};

  @keyframes rightSlideIn {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
