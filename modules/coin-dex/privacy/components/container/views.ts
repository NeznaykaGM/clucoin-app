import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 0.5rem !important;
  padding-right: 15px;
  padding-left: 15px;

  p {
    font-size: 12px;
  }
`;

export const Title = styled.h2<{ largeTitle?: boolean }>`
  color: ${({ largeTitle, theme }) => (largeTitle ? theme.colors.white : '#6c757d')};
  margin-bottom: 0.5rem !important;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: ${({ largeTitle }) => largeTitle && 24}px;
`;
