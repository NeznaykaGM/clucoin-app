import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 70px 30px 100px;
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 0;
  opacity: 1;
  transform: translateZ(0px);
  justify-content: space-around;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    overflow: visible;
    padding: 10px;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 330px;
  max-width: 1230px;

  @media screen and (max-width: 1250px) {
    padding: 10px;
    overflow: visible;
    text-align: center;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const LeftSectionWrapper = styled.div<{ isUserSee: boolean }>`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  transition: opacity 1s ease;
  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};

  animation: ${({ isUserSee }) => (isUserSee ? 'leftSlideIn 1s forwards' : 'none')};

  @media screen and (max-width: 1250px) {
    padding-bottom: 20px;
  }

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

  @media (max-width: 1250px) {
    ${({ theme }) => theme.templates.centerItems};
  }
`;

export const Title = styled.span`
  font-size: 45px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1250px) {
    font-size: 30px;
  }
`;

export const PinkTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.pink300};
`;

export const SubTitle = styled.span`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Canvas = styled.div`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0px;
  left: 0;
  z-index: 0 !important;
  opacity: 0.5;
`;
