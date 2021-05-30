import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  color: rgb(255, 255, 255);
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  display: flex;
  transform: translateZ(0px);

  &:before {
    position: absolute;
    inset: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  max-width: 1230px;
  top: 150px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue500};
  padding-bottom: 50px;
`;

export const IBWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  padding-bottom: 25px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconWrapper = styled.div`
  padding: 0px 5px;
`;

export const MIWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 352px;
`;
