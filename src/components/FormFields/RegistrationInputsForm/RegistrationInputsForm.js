import { MyOwnField } from '../../MyOwnField/MyOwnField'
import { v4 as uuidv4 } from "uuid";
import { teachersTypes } from '../../../utilities/teachersTypes'
import { accountRoles } from '../../../utilities/accountRoles';

export const RegistrationInputsForm = (props) =>

    <>
        <MyOwnField
            id="name"
            label="Wpisz imię:"
            name="name"
            type="text"
            as="input"
            value={props.name}
            placeholder="Wpisz imię użytkownika"
            required
        />
        <MyOwnField
            id="surname"
            label="Wpisz nazwisko:"
            name="surname"
            type="text"
            as="input"
            value={props.surname}
            placeholder="Wpisz nazwisko użytkownika"
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
        <MyOwnField
            id="role"
            as="select"
            name="role"
            label="Rola:"
            required>
            <option value="">Wybierz typ konta</option>
            {
                Object.values(accountRoles).map((item) =>
                    <option key={uuidv4()} value={item}>
                        {item}
                    </option>
                )
            }

        </MyOwnField>
        {props.values.role === accountRoles.NAUCZYCIEL ? <MyOwnField
            id="teacherType"
            as="select"
            name="teacherType"
            label="Typ nauczyciela"
            required>
            <option value="">Wybierz typ konta</option>
            {teachersTypes.map(element => (
                <option key={uuidv4()} value={element}>
                    {element}
                </option>
            ))}
        </MyOwnField> : false}
    </>
