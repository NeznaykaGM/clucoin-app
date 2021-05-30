import React from 'react';
// libs
import styled from 'styled-components';

interface Props {
  src: string;
}

const Wrapper = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 100%;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.blue500};
  ${({ theme }) => theme.templates.centerContent};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.pink400};
  }
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
`;

const IconButton: React.FC<Props> = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} alt='icon' />
    </Wrapper>
  );
};

export default IconButton;
