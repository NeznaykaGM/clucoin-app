import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100%;
  position: relative;

  /*TODO why ?*/
  padding-top: 60px;
`;

export const HeaderBanner = styled.div`
  background-color: #410ca3;
  padding-top: 180px;
  padding-bottom: 90px;
  background-image: url('/static/images/sub-page-banner.svg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  text-align: center;
`;

export const HeaderTitle = styled.p`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 10px;
`;
