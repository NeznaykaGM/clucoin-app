import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0px;
  overflow: visible;
`;

export const CWrapper = styled.div`
  position: relative;
  margin: 0px 20px;
  padding: 20px;
  height: 300px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray400};

  line-height: 38px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.gray100};

  @media screen and (max-width: 768px) {
    margin: 0px 5px;
  }
`;
