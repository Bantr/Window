import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div) <{ isVisible: boolean }>`
  width: 100%;
  height: 0;
  background-color: ${({ theme }): string => theme.p};
  color: white;
  padding: 10px 15px;
  display: ${({ isVisible }): string => isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 15px;
  overflow-y: hidden;

  p{
    width: 100%;
  }

  p::first-letter {
    text-transform: capitalize;
  }

  svg {
    fill: white;
    margin-right: 15px;
  }
`;
