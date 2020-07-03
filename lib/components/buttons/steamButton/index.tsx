import * as React from 'react';
import { bantrSettings } from 'lib/settings';
import steamButton from 'lib/images/steam/steam-button.png';
import steamButtonBig from 'lib/images/steam/steam-button-big.png';

interface IProps {
  big?: boolean;
}

export const SteamButton: React.FC<IProps> = ({ big = false }) => (
  <a href={`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo`}>
    <img src={big ? steamButtonBig : steamButton} />
  </a>
);
