import styled from 'styled-components';

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 20px 15px;
  transition: transform 0.2s ease-in-out;
  overflow-x: hidden;

  &.external {
    margin: 10px 0 10px 15px;
  }

  &:hover {
    transform: translateX(5px);
  }
  .link, a {
    display: flex;
  }
  .link.active {
    color: ${({ theme }): string => theme.p};
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
  font-weight: 500;

  &.external {
    font-size: 12px;
  }
`;
