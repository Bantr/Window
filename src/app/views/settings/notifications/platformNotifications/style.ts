import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;

  form {
    label {
      font-weight: 500;
    }
    input[type="submit"]{
      display: none;
    }
  }
`;

export const InnerForm = styled.div`
    padding: 40px 40px 40px 0;
    background-color: ${({ theme }): string => theme.sb};
    border-radius: 10px;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`;

export const Description = styled.p`
  width: 100%;
  margin-bottom: 30px;
`;

export const SteamContainer = styled.div`
  margin-top: 25px;

  span {
    font-weight: 500;
    font-size: 0.9rem;
    margin-left: 25px;
  }
`;
