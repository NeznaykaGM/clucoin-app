import styled from 'styled-components';

export const Wrapper = styled.div<{ expanded: boolean }>`
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  margin-top: 55px;
  transition: height 0.5s ease;

  height: ${({ expanded }) => (expanded ? '100%' : '0')};

  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ItemsWrapper = styled.div<{ expanded: boolean }>`
  padding-top: 10px;
  transition: all 0.5s ease;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

export const IWrapper = styled.div`
  width: 100%;
  padding: 8px 15px;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink400};
`;
