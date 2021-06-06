import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;

  ${({ theme }) => theme.templates.centerContent};
  flex-direction: column;
`;

export const SuccessfulWrapper = styled.div<{ isSuccessful: boolean }>`
  border: 2px solid olivedrab;
  padding: 20px;
  width: 100%;
  transition: 1s all ease;
  opacity: ${({ isSuccessful }) => (isSuccessful ? '1' : '0')};
  max-width: 680px;
  border-radius: 10px;
  margin: 20px;
`;

export const From = styled.form`
  width: 100%;
  position: relative;
  max-width: 700px;
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 45px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1250px) {
    font-size: 30px;
  }
`;
