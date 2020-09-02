import * as React from 'react';
import { Laptop } from './Laptop';
import { Title, Paragraph, Button } from 'lib/components';
import { WeaponAk47 } from 'lib/icons';

import {
  Container,
  TextContainer,
  ImageContainer
} from './style';

export const Landing: React.FC = () => (
  <Container>
    <TextContainer>
      <Title size="huge" type="h1">Get in depth <strong>CS:GO</strong> match analysis.</Title>
      <Paragraph>
        Get a full picture of your performances, inside and out. <br />
        Harness the power of your data and unleash your full potential.
      </Paragraph>
      <Button icon={<WeaponAk47 pointer scale={1.5} />} variant="default">
        Read more
      </Button>
    </TextContainer>
    {
      /*
        This should eventually contain a sample application of the real app with a mocked graphql provider.
        <WindowContainer>
          <Window>
            <img alt="Preview app temp" src={appTemp} />
          </Window>
        </WindowContainer>
    */
    }
    <ImageContainer>
      <Laptop />
    </ImageContainer>
  </Container >
);
