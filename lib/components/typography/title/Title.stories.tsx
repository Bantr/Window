import * as React from 'react';
import { Title as TitleComponent } from '.';

export default {
  component: TitleComponent,
  title: 'Title components'
};

export const TitleSize = (): React.ReactNode => (
  <>
    <TitleComponent size="small">small title</TitleComponent>
    <TitleComponent size="medium">medium title</TitleComponent>
    <TitleComponent size="large">large title</TitleComponent>
    <TitleComponent size="huge">huge title</TitleComponent>
    <TitleComponent size="massive">Huge title</TitleComponent>
  </>
);
