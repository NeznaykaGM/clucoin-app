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
`;
