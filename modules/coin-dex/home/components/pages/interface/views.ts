import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 100px;
  flex-direction: column;
  ${({ theme }) => theme.templates.centerContent}
`;

export const Image = styled.img<{ isUserSeeImage: boolean }>`
  animation: ${({ isUserSeeImage }) => (isUserSeeImage ? 'imageSlideUp 1s forwards' : 'none')};

  @keyframes imageSlideUp {
    0% {
      transform: translateY(500px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const Title = styled.p<{ isUserSeeText: boolean }>`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 50px;

  animation: ${({ isUserSeeText }) => (isUserSeeText ? 'textSlideUp 1s forwards' : 'none')};

  @keyframes textSlideUp {
    0% {
      transform: translateY(200px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;
