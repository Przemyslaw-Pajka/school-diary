import styled from "styled-components";

export const CommonFormStyled = styled.form`
  padding: 48px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  box-shadow: 1px 1px 11px #b8b8b8;

 .form-title {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  label {
    font-weight: 800;
  }
  input,
  select {
    margin-bottom: 10px;
  }
`;
