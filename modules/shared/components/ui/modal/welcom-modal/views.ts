import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  flex-direction: column;
  ${({ theme }) => theme.templates.centerItems}

  @media (max-width: 768px) {
    height: unset;
    margin-top: 50px;
    padding: 40px 20px;
  }
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
  margin: 10px 0 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;
export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 30px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;
