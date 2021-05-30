import styled from 'styled-components';

interface ProgressProps {
  percent: number;
}

export const PWrapper = styled.div`
  height: 8px;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  margin-top: 25px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 2s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: ${({ theme }) => theme.colors.gray400};
  width: 100%;
`;

export const Progress = styled(BaseBox)<ProgressProps>`
  background: linear-gradient(to right, rgba(218, 75, 253, 1) 0%, rgba(73, 15, 180, 1) 100%);
  width: ${({ percent }) => percent}%;
`;

export const Title = styled.span`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Count = styled.span`
  font-size: 14px;
  margin-bottom: 6px;
`;
