import * as React from 'react';
import { createPortal } from 'react-dom';
import { Container, Overlay } from './style';

interface IModalProps {
  isOpen?: boolean;
  elementId?: string;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen = false, elementId = 'modal' }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <Overlay>
      <Container>
        {children}
      </Container>
    </Overlay>,
    document.getElementById(elementId)
  );
};

export const useModal: any = () => {
  const [isOpen, setOpen] = React.useState(false);
  const open = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const close = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const ModalWrapper = React.useCallback(({ children }) => (<Modal isOpen={isOpen}>{children}</Modal>), [isOpen]);

  return [ModalWrapper, open, close];
};
