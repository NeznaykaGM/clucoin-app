import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 45px;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Canvas = styled.div`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0px;
  left: 0;
  z-index: 0 !important;
  opacity: 0.5;
`;
