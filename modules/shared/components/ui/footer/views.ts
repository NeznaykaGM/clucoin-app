import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 200px;
  color: rgb(255, 255, 255);
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  display: flex;
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

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const IWrapper = styled.div`
  padding-bottom: 10px;
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  justify-content: space-between;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyrightMenuWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
  }
`;

export const MenuItemWrapper = styled.div`
  border-right: 2px solid #5d19db;
`;
