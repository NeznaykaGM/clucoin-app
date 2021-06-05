import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1230px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  padding-bottom: 65px;
  justify-content: center;

  @media (max-width: 1250px) {
    margin: 0;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const DistributionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DistributionProceedsWrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  @media (max-width: 1250px) {
    margin-top: 20px;
  }
`;

export const TokeList = styled.div`
  max-width: 400px;
  position: relative;
`;

export const TokeListItem = styled.p`
  text-align: center;
`;

export const PinkTokeListItem = styled.p`
  color: ${({ theme }) => theme.colors.pink300};
`;

export const DistributionLeftTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.pink300};
`;

export const DistributionRightTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 50px;
  color: ${({ theme }) => theme.colors.pink300};
`;

export const TokensTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pink300};
`;

export const TokenInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  flex: 2;

  @media (max-width: 1250px) {
    margin-top: 20px;
  }
`;
