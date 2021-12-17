import styled from "styled-components";

export const CommonFormStyled = styled.form`
  padding: 48px;
  display: flex;
  flex-direction: column;
  max-width: 300px;

  legend {
    font-size: 32px;
    margin-bottom: 25px;
  }
  label {
    font-weight: 800;
  }
  input,
  select {
    margin-bottom: 10px;
  }
`;
