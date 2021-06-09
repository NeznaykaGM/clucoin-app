import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
`;

export const SubTitle = styled.span<{ fw?: number; color?: string }>`
  font-weight: ${({ fw }) => fw || 400};
  color: ${({ color }) => color || 'white'};
`;
