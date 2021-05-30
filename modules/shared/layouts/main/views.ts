import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100%;

  /*TODO why ?*/
  padding-top: 60px;
`;
