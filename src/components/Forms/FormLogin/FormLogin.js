import { Formik } from "formik";
import { useHistory } from 'react-router-dom';
import { User } from '../../../classes/Persons';
import { typesOfDB } from '../../../config/typesOfDB';
import { loginSchema } from '../../../validationSchema/login/loginSchema';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import { InputTextField } from "../Fields/InputTextField/InputTextField";
import { FormLoginStyled } from './styles/FormLoginStyled';

const getUserIfCorrectDataLogin = (users, dataForm) => {
    return users.find(user => user.id === dataForm.userID && user.password === dataForm.password)
}

export const verifyDataToLogIn = (dataForm) => {
    const users = JSON.parse(localStorage.getItem(typesOfDB.users));
    const isUsersExist = users === null;

    if (!isUsersExist === false) {
        return false;
    }

    return getUserIfCorrectDataLogin(users, dataForm)
}

export const FormLogin = () => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{}}
            onSubmit={values => {
                const user = verifyDataToLogIn(values);
                const isUserDataLoginCorrect = user ? true : false;

                return isUserDataLoginCorrect ? User.signIn(user, history) : false;
            }}
            validationSchema={loginSchema}
        >
            {(props) => (
                <FormLoginStyled
                    onReset={props.handleReset}
                    onSubmit={props.handleSubmit}>
                    <h1 className="form-title">Panel logowania</h1>
                    <InputTextField
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
                    <InputTextField
                        id="password"
                        label="Wpisz hasło:"
                        name="password"
                        type="password"
                        as="input"
                        value={props.password}
                        placeholder="Wpisz hasło użytkownika"
                        required
                    />
                    <ButtonSubmit>Zaloguj się</ButtonSubmit>
                </FormLoginStyled>
            )}
        </Formik>
    );
}


