import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  width: 100%;
  padding: 10px;
`;

export const NotificationCheckboxContainer = styled.div`
  background-color: ${({ theme }): string => theme.sb};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  margin-bottom: 20px;

  .tooltip-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  input[type="submit"]{
    display: none;
  }

  label {
    margin-left: 50px;
  }
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;
