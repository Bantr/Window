import * as React from 'react';
import { Title, Paragraph } from 'lib/components';
import { Container, Inner, TextContainer } from './style';
import { Laptop } from './Laptop';
import { Header, Footer } from '../../../components/nav';

export const Landing: React.FC = () => (
  <Container>
    <Header />
    <Inner>
      <TextContainer>
        <Title size="massive" type="h1">We care about your privacy.</Title>
        <Paragraph>
          The privacy policy will explain how our organization uses and protects your personal data.
        </Paragraph>
      </TextContainer>
      <Laptop />
    </Inner>
    <Footer />
  </Container>
);
