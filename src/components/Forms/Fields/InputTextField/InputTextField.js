import { Field, useField } from "formik";
import { Error, Label, MyOwnFieldStyled } from "./styles/MyOwnField.styled";

export const InputTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <MyOwnFieldStyled>
      <Label
        htmlFor={props.id || props.name}>
        {label}
      </Label>
      <Field
        as={props.as}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </MyOwnFieldStyled>
  );
};
