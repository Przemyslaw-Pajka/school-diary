import { MyOwnField } from '../../MyOwnField/MyOwnField'
export const LoginInputsForm = (props) =>
  <>
    <MyOwnField
      id="userID"
      label="Wpisz ID:"
      name="userID"
      type="number"
      as="input"
      min='0'
      value={props.userID}
      placeholder="Wpisz ID użytkownika"
      required
    />
    <MyOwnField
      id="password"
      label="Wpisz hasło:"
      name="password"
      type="password"
      as="input"
      value={props.password}
      placeholder="Wpisz hasło użytkownika"
      required
    />
  </>
