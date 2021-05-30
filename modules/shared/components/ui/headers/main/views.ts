import styled from 'styled-components';

export const Wrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  padding: ${({ isScroll }) => (isScroll ? '15px 0px' : '40px 0px')};
  position: fixed;
  top: 0;
  transition: all 0.4s ease 0s;
  width: 100%;
  z-index: 999;

  background-color: ${({ theme, isScroll }) => isScroll && theme.colors.black};
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 160px;
`;

export const LWrapper = styled.div`
  img {
    display: block;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }

  ${({ theme }) => theme.templates.centerItems};
`;

export const RWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.templates.centerItems};
`;
