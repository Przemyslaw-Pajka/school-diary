import { Student, Teacher } from '../classes/Persons'
import { accountRoles } from './accountRoles';

export const createUser = (values) => {
    switch (values.role) {
        case accountRoles.UCZEN:
            new Student(values);
            break;
        case accountRoles.NAUCZYCIEL:
            new Teacher(values);
            break;
        default: break;
    }
}