import * as React from 'react';
import { Container, Inner, BottomContainer, PanelContainer, Panel } from './style';
import { Link } from '@reach/router';
import { Logo } from 'lib/components';

export const Footer: React.FC = () => (
  <Container>
    <Inner>
      <PanelContainer>
        <Panel >
          <Link className="bantr" to="/">
            <Logo size={30} />
            <span>Bantr</span>
          </Link >
        </Panel>
        <Panel>
          <h3>Support</h3>
          <a href="https://discord.bantr.app" rel="noopener noreferrer" target="_blank">Discord</a>
          <a href="mailto:info@bantr.app" rel="noopener noreferrer" target="_blank">Mail</a>
        </Panel>
        <Panel>
          <h3>Partners</h3>
          <a href="mailto:info@bantr.app" rel="noopener noreferrer" target="_blank">Collaborate?</a>
        </Panel>
        <Panel>
          <h3>Contact</h3>
          <a href="https://discord.bantr.app" rel="noopener noreferrer" target="_blank">Discord</a>
          <a href="https://github.com/bantr" rel="noopener noreferrer" target="_blank">Github</a>
          <a href="mailto:info@bantr.app" rel="noopener noreferrer" target="_blank">Mail</a>
        </Panel>
      </PanelContainer>
      <BottomContainer>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span>All Rights Reserved 2020</span>
        <Link to="/terms-of-use">Terms of Use</Link>
      </BottomContainer>
    </Inner>
  </Container>
);
