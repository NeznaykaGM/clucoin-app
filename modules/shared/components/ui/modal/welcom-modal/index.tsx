import React from 'react';
// components
import Modal from '@md-ui/modal/main';
// views
import { SubTitle, Title, Wrapper } from '@md-ui/modal/welcom-modal/views';
import { Button } from '@md-ui/button/main';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const WelcomeModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <Wrapper>
        <Title>Oops...</Title>
        <SubTitle>The site is intended for computers. We advise you to visit it from your computer.</SubTitle>
        <Button onClick={toggleModal}>Ok!</Button>
      </Wrapper>
    </Modal>
  );
};

export default WelcomeModal;
