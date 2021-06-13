import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0px);
  display: flex;
  justify-content: center;
  z-index: 2;
  max-width: 1230px;
  margin: 0 auto;
  flex-direction: column;
`;
export const ContentWrapper = styled.div<{ isUserSee: boolean }>`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    padding: 25px;
    text-align: center;
    ${({ theme }) => theme.templates.centerContent}
  }

  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  animation: ${({ isUserSee }) => (isUserSee ? 'infoSlideUp 1s forwards' : 'none')};

  @keyframes infoSlideUp {
    0% {
      transform: translateY(250px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const SubTitle = styled.p``;

export const Title = styled.span`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1250px) {
    font-size: 30px;
  }
`;

export const PinkTitle = styled(Title)`
  padding-right: 75px;
  width: 100%;
  max-width: 370px;
  color: ${({ theme }) => theme.colors.pink300};

  @media screen and (max-width: 1250px) {
    padding: 0;
  }
`;

export const CardsWrapper = styled.div<{ isUserSee: boolean }>`
  display: grid;
  grid-gap: 30px;
  transition: opacity 1s ease;
  opacity: ${({ isUserSee }) => (isUserSee ? '1' : '0')};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  animation: ${({ isUserSee }) => (isUserSee ? 'cardsSlideUp 1s forwards' : 'none')};

  a {
    margin: 0;
    padding: 0;
  }

  @keyframes cardsSlideUp {
    0% {
      transform: translateY(450px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 1250px) {
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray400};

  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gary800};
  max-width: 390px;
  max-height: 120px;
  cursor: pointer;
`;
