import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding-right: 30px;
  padding-left: 30px;

  p {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.pink300};
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.pink300};
`;
