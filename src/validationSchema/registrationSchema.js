import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Imię powinno zawierać przynajmniej 3 znaki'),
    surname: Yup.string()
        .min(3, 'Nazwisko powinno zawierać przynajmniej 3 znaki'),
    password: Yup.string()
        .matches(/^[0-9]+$/, "ID powinno składać się tylko z cyfr")
        .min(6, 'Hasło powinno zawierać 6 znaków')
        .max(6, 'Hasło powinno zawierać 6 znaków'),
});