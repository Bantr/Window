import * as React from 'react';
import { CookieConsentModal } from '../../modals';
import { useModal, useLocalStorage } from 'lib/hooks';
import { useSnackbar } from 'notistack';

export const CookieConsent: React.FC = () => {
  const [ModalWrapper, open, close] = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const [val, setVal] = useLocalStorage<boolean>('cookie-consent', false);
  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (val === false) {
      open();
    }
  }, []);

  function closeCookieConsent() {
    setVal(true);
    close();
    enqueueSnackbar('Successfully accepted the cookie consent.', { variant: 'success' });
  }

  return (
    <ModalWrapper>
      <CookieConsentModal close={closeCookieConsent} ref={wrapperRef} />
    </ModalWrapper>
  );
};
