import { FormRegistrationStyled } from './styles/FormRegistrationStyled'
import { Formik } from 'formik'
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit'
import { RegistrationInputsForm } from '../FormFields/RegistrationInputsForm/RegistrationInputsForm'
import { registrationSchema } from '../../validationSchema/registrationSchema'
import { createUser } from '../../utilities/createUser'
import { ButtonBackHome } from '../ButtonBackHome/ButtonBackHome'

export const FormRegistration = () =>
    <Formik
        initialValues={{}}
        onSubmit={values => {
            console.log('values', values)
            createUser(values)
        }}
        validationSchema={registrationSchema}
    >
        {(props) =>
            <>

                <FormRegistrationStyled
                    onReset={props.handleReset}
                    onSubmit={props.handleSubmit}>
                    <ButtonBackHome />
                    <legend>Rejestracja nowego użytkownika</legend>
                    <RegistrationInputsForm values={props.values} />
                    <ButtonSubmit>Zarejestruj konto</ButtonSubmit>
                </FormRegistrationStyled>
            </>
        }
    </Formik>