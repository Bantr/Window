import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Helmet } from 'react-helmet';
import { useModal } from 'lib/hooks';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Profile: React.FC<IProps> = () => {
  const [Modal, open, close] = useModal();

  return (
    <>
      <Helmet>
        <title>Csgo | Profile</title>
      </Helmet>
      <button onClick={open}>open modal</button>
      {
        <Modal>
          <div>this is the modal child container</div>
          <button onClick={close}>close</button>
        </Modal>
      }
      <div>this is the profile</div>
    </>
  );
};
