import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { Logo } from 'lib/components';

export const BantrUser: React.FC = () => (
  <Tooltip
    overlay="BANTR USER!"
    overlayClassName="bantr-user-tooltip"
    placement="bottom"
    trigger="hover"
  >
    <div>
      <Logo size={24} />
    </div>
  </Tooltip>
);
