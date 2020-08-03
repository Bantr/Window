import styled from 'styled-components';

export const FieldActionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  margin-top: -30px;
`;

export const FieldAction = styled.span`
  display: block;
  color: ${({ theme }): string => theme.p};
  font-size: 0.7rem;
  margin: 0 10px;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;


  &:hover {
    text-decoration: underline solid ${({ theme }): string => theme.p};
  }
`;
