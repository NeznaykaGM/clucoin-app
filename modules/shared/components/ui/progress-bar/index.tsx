import React from 'react';
// views
import { Background, Wrapper, Progress, Title, PWrapper, TitleWrapper, Count } from './views';

interface Props {
  percent: number;
  count?: string;
  title?: string | React.ReactNode;
}

const ProgressBar: React.FC<Props> = ({ percent, count, title }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Count>{count} shares</Count>
        <Title>{title}</Title>
      </TitleWrapper>

      <PWrapper>
        <Background />
        <Progress percent={percent} />
      </PWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
