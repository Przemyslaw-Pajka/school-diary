import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    userID: Yup.string()
        .matches(/^[0-9]+$/, "ID powinno składać się tylko z cyfr")
        .min(6, 'ID powinno zawierać 6 znaków')
        .max(6, 'ID powinno zawierać 6 znaków'),
    password: Yup.string()
        .min(6, 'Hasło powinno zawierać minimum 6 znaków')
});