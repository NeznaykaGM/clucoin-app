import React from 'react';
// views
import { ModalComponent } from '@md-ui/modal/main/views';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, children, toggleModal }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ModalComponent
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={toggleModal}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={false}
    >
      {children}
    </ModalComponent>
  );
};

export default Modal;
