import { accountRoles } from "./accountRoles";

export const routeChange = (user, history) => {
    let path;

    switch (user.role) {
        case accountRoles.UCZEN:
            path = '/uczen'
            break;
        case accountRoles.NAUCZYCIEL:
            path = '/nauczyciel'
            break;
        default:
            break;
    }

    history.push(path);
}