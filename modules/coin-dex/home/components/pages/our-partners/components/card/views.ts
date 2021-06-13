import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray400};
  padding: 30px;
  height: 100vh;
  max-height: 190px;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  max-height: 190px;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 40px);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
`;

export const SubTitle = styled.span`
  font-weight: 300;
`;
