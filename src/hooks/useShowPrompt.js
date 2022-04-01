
import { useEffect } from 'react';
import { adminPassword } from '../config/adminPassword';

const verifyAdminPassword = (passwordTypedByUser, adminPassword) => passwordTypedByUser === adminPassword

const getUserAnswerFromPrompt = () => {
    const msgToUser = "Podaj hasło administratora";
    return new Promise((resolve, reject) => {
        resolve(window.prompt(msgToUser))
    })
}

export const useShowPrompt = async (setIsCorrectAdminPassword) => {
    useEffect(() => {
        const showPrompt = async () => {
            const passwordTypedByUser = await getUserAnswerFromPrompt();
            const isPasswordCorrect = verifyAdminPassword(passwordTypedByUser, adminPassword)


            isPasswordCorrect ? setIsCorrectAdminPassword(true) : showPrompt();
        }

        showPrompt()
    }, [])
}