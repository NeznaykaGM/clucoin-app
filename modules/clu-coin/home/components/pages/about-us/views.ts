import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0px;
  display: flex;
  right: 0px;
  min-height: 100%;
  max-height: 100%;
  min-width: 65%;
  max-width: 1230px;
  z-index: 0;
  height: 100vh;
  margin: 0 auto;
  ${({ theme }) => theme.templates.centerContent}

  @media screen and (max-width: 1250px) {
    flex-direction: column;

    height: auto;
  }

  @media screen and (max-width: 1250px) {
    padding: 20px;
    text-align: center;
  }
`;

export const Title = styled.span`
  font-size: 45px;
  font-weight: 600;
  padding-bottom: 20px;
  line-height: 1.2;

  @media screen and (max-width: 1250px) {
    font-size: 30px;
    padding-top: 20px;
  }
`;

export const MTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 15px;

  @media screen and (max-width: 1250px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.p``;

export const PinkTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.pink300};
`;

export const LeftSectionWrapper = styled.div<{ isUserSee: boolean }>`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: opacity 1s ease;
  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};

  animation: ${({ isUserSee }) => (isUserSee ? 'leftSlideIn 1s forwards' : 'none')};

  @keyframes leftSlideIn {
    0% {
      transform: translateX(-500px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const RightSectionWrapper = styled.div<{ isUserSee: boolean }>`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 460px;
  max-width: 460px;
`;
