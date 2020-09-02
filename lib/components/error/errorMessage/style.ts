import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div) <{ isVisible: boolean }>`
  width: 100%;
  height: 0;
  background-color: ${({ theme }): string => theme.error};
  color: white;
  padding: 10px 15px;
  display: ${({ isVisible }): string => isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  font-weight: 500;
  margin-bottom: 15px;
  overflow-y: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;

  p{
    width: 100%;
  }

  p::first-letter {
    text-transform: capitalize;
  }

  .icon {
    fill: white;
    margin-right: 15px;
  }
`;
