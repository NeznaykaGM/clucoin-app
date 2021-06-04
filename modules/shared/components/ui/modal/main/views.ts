import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalComponent = styled(ReactModal)`
  background: ${({ theme }) => theme.colors.gray400};
  border-radius: 10px;
  height: calc(100% - 100px);
  left: 50%;
  max-height: 700px;
  max-width: 1050px;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  width: calc(100% - 100px);

  @media (max-width: 768px) {
    border-radius: 0;
    height: 100%;
    left: 0;
    max-height: unset;
    overflow: auto;
    top: 0;
    transform: none;
    width: 100%;
  }
`;
