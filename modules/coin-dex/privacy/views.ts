import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;

  a {
    color: #17a2b8;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  padding-bottom: 18px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;
