import * as React from 'react';
import styled from 'styled-components';
import { Title, Paragraph, Button } from 'lib/components';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { authenticationService } from 'lib/services';
import { Home } from 'lib/icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 20px;
    .icon{
      margin-top: -3px;
    }
  }
`;

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  async function takeMeHome(): Promise<void> {
    const session = await authenticationService.isAuthenticated();
    if (session) {
      navigate('/csgo/dashboard');
      return;
    }
    navigate('/');
  }

  return (
    <Container>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <Title size="massive" type="h1">Page not found</Title>
      <Paragraph>Looks like you got lost in our <strong>amazing</strong> stats.</Paragraph>
      <ButtonContainer>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        <Button icon={<Home pointer scale={.8} />} onClick={() => takeMeHome()}>Take me home</Button>
      </ButtonContainer>
    </Container>
  );
};
