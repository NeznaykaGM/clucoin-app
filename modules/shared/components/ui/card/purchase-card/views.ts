import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 330px;
  max-width: 585px;
  border-radius: 5px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gary800};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: 55px;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
