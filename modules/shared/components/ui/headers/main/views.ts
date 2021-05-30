import styled from 'styled-components';

export const Wrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  padding: ${({ isScroll }) => (isScroll ? '15px 0px' : '40px 0px')};
  position: fixed;
  top: 0;
  transition: all 0.4s ease 0s;
  width: 100%;
  z-index: 999;

  background-color: ${({ isScroll }) => isScroll && 'rgba(0, 0, 0, .95)'};

  @media (max-width: 768px) {
    padding: ${({ isScroll }) => (isScroll ? '15px 15px' : '20px 15px')};
  }
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 160px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const LWrapper = styled.div`
  img {
    display: block;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      max-width: 120px;
    }
  }

  ${({ theme }) => theme.templates.centerItems};
`;

export const RWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.templates.centerItems};

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const IconWrapper = styled('div')`
  top: 0;
  z-index: 1000;
`;

export const MenuBtn = styled.div<{ isActive: boolean }>`
  width: 30px;
  height: 26px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  p {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9px;
    transition: 0.25s ease-in-out;
  }
`;

export const Line1 = styled.p<{ isActive: boolean }>`
  top: ${({ isActive }) => (isActive ? '8px' : '0px')};
  transform: ${({ isActive }) => isActive && 'rotate(135deg)'};
`;

export const Line2 = styled.p<{ isActive: boolean }>`
  opacity: ${({ isActive }) => isActive && '0'};
  top: 8px;
`;

export const Line3 = styled.p<{ isActive: boolean }>`
  top: 16px;

  top: ${({ isActive }) => isActive && '8px'};
  transform: ${({ isActive }) => (isActive ? 'rotate(-135deg)' : ' rotate(0deg)')};
`;
