import { signIn } from '../../utilities/signIn';
import { useHistory } from 'react-router-dom'
import { Formik } from "formik";
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit'
import { FormLoginStyled } from './styles/FormLoginStyled';
import { LoginInputsForm } from '../FormFields/LoginInputsForm/LoginInputsForm';
import { HeadingLoginForm } from '../HeadingLoginForm/HeadingLoginForm';
import { verifyDataToLogIn } from '../../utilities/verifyDataToLogIn';
import { loginSchema } from '../../validationSchema/loginSchema';


export const FormLogin = () => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{}}
            onSubmit={values => {
                const user = verifyDataToLogIn(values);
                const isUserDataLoginCorrect = user ? true : false;

                console.log(values)
                return isUserDataLoginCorrect ? signIn(user, history) : false;
            }}
            validationSchema={loginSchema}
        >
            {(props) => (
                <FormLoginStyled
                    onReset={props.handleReset}
                    onSubmit={props.handleSubmit}>
                    <HeadingLoginForm />
                    <LoginInputsForm values={props.values} />
                    <ButtonSubmit>Zaloguj się</ButtonSubmit>
                </FormLoginStyled>
            )}
        </Formik>
    );
}


