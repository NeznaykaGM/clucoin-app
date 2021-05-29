import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gary800};
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  margin: 0 auto;
  height: 60px;
`;

export const LWrapper = styled.div`
  flex: 1;

  img {
    display: block;
    max-height: 20px;
  }

  ${({ theme }) => theme.templates.centerItems};
`;

export const RWrapper = styled.div`
  flex: 2;
  justify-content: flex-end;
  color: white;

  ${({ theme }) => theme.templates.centerItems};
`;
