import * as Yup from 'yup';

const PASSWORD_MIN_LENGTH = 6;
const ID_LENGTH = 6;

export const invalidFieldMessages = Object.freeze({
    id: `Nieprawidłowe ID`,
    password: `Nieprawidłowe hasło`,
    require: `Pole jest wymagane`
})

export const loginSchema = Yup.object().shape({
    userID: Yup.string()
        .matches(/^[0-9]+$/, "ID powinno składać się tylko z cyfr")
        .min(6, 'ID powinno zawierać 6 znaków')
        // .max(6, 'ID powinno zawierać 6 znaków')
        .required(invalidFieldMessages.require),
    password: Yup.string()
        .min(PASSWORD_MIN_LENGTH, invalidFieldMessages)
        .required(invalidFieldMessages.require)
});