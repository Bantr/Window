import styled from 'styled-components';

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 20px 15px;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &.external {
    margin: 15px 0 15px 15px;
  }

  &:hover {
    transform: translateX(5px);
  }

  a {
    display: flex;
  }

  a.link {
    opacity: 0.5;
    transition: opacity .2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
    }
  }
`;

export const IconContainer = styled.div`
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: 15px;

  &.external {
    font-size: 12px;
  }
`;
