import { adminPassword } from "./adminPassword";

export const verifyAdminPassword = (passwordTypedByUser) => {
    const isPasswordCorrect = passwordTypedByUser === adminPassword

    return isPasswordCorrect;
}