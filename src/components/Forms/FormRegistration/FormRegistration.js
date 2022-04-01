import { Formik } from 'formik'
import { v4 as uuidv4 } from "uuid"
import { Student, Teacher, User } from '../../../classes/Persons'
import { accountRoles } from '../../../config/accountRoles'
import { schoolSubjects } from '../../../config/schoolSubjects'
import { typesOfDB } from '../../../config/typesOfDB'
import { registrationSchema } from '../../../validationSchema/registration/registrationSchema'
import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit'
import { InputTextField } from '../Fields/InputTextField/InputTextField'
import { FormRegistrationStyled } from './styles/FormRegistrationStyled'

const createUser = (values) => {
    switch (values.role) {
        case 'uczen':
            return new Student(values);
        case 'nauczyciel':
            return new Teacher(values);
        default: break;
    }
}

export const FormRegistration = () => {
    return (
        <Formik
            initialValues={{ name: '', surname: '', password: '', role: '' }}
            onSubmit={(values, { resetForm }) => {
                console.log('onSubmit')
                let user = createUser({ ...values })
                const { id } = user;
                const messageToUser = `Pilnie zapisz na kartce to ID, bedzie Ci potrzebne do logowania ${id}`
                console.log(user)
                User.saveUserToDB(user, typesOfDB.users)
                alert(messageToUser)
                resetForm()

            }}
            validationSchema={registrationSchema}
        >
            {(props) => {
                return (
                    <>

                        <FormRegistrationStyled
                            onReset={props.handleReset}
                            onSubmit={props.handleSubmit}>
                            <h1 className='form-title'>Rejestracja nowego użytkownika</h1>
                            <InputTextField
                                id="name"
                                label="Wpisz imię:"
                                name="name"
                                type="text"
                                as="input"
                                value={props.values.name}
                                placeholder="Wpisz imię użytkownika"
                                required
                            />
                            <InputTextField
                                id="surname"
                                label="Wpisz nazwisko:"
                                name="surname"
                                type="text"
                                as="input"
                                value={props.values.surname}
                                placeholder="Wpisz nazwisko użytkownika"
                                required
                            />
                            <InputTextField
                                id="password"
                                label="Wpisz hasło:"
                                name="password"
                                type="password"
                                as="input"
                                value={props.values.password}
                                placeholder="Wpisz hasło użytkownika"
                                required
                            />
                            <InputTextField
                                id="role"
                                as="select"
                                name="role"
                                label="Rola:"
                                required>
                                <option value="">Wybierz typ konta</option>
                                {
                                    Object.entries(accountRoles).map((item) =>
                                        <option key={uuidv4()} value={item[0]}>
                                            {item[1]}
                                        </option>
                                    )
                                }

                            </InputTextField>
                            {props.values.role === accountRoles.nauczyciel && <InputTextField
                                id="teacherType"
                                as="select"
                                name="teacherType"
                                label="Typ nauczyciela"
                                required>
                                <option value="">Wybierz typ konta</option>
                                {schoolSubjects.map(element => (
                                    <option key={uuidv4()} value={element}>
                                        {`Nauczyciel ${element}`}
                                    </option>
                                ))}
                            </InputTextField>}
                            <ButtonSubmit>Zarejestruj konto</ButtonSubmit>
                        </FormRegistrationStyled>
                    </>
                )
            }
            }
        </Formik>
    )
}