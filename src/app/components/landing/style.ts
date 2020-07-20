import styled from 'styled-components';
import { Button } from 'lib/components';

export const Container = styled.section`
  margin-top: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: 6vw;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.2;
`;

export const HeroLead = styled.p`
  opacity: 0.9;
  font-size: 25px;
  width: 100%;
  max-width: 100%;
  text-align: center;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const StyledButton = styled(Button)`
  font-size: 110%;
  max-width: 200px;
  text-align: center;
  border-radius: 20px;
  margin: 0 auto 50px auto;
`;

export const WindowContainer = styled.div`
  position: relative;
  width: calc(100% - 40px);
  padding: 20px;
  height: auto;
  margin: 0 auto;
`;

export const Window = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  background-color: ${({ theme }): string => theme.pb};
  margin: 0 auto;
  left: 0;
  right: 0;
  transform: rotateX(20deg);
  padding: 5px;

  img {
    width: 100%;
    height: auto;
  }
`;
