import { verifyAdminPassword } from "./verifyAdminPassword";
import { getUserAnswerFromPrompt } from "./getUserAnswerFromPrompt";

export const showPrompt = async (setIsCorrectAdminPassword) => {
    const passwordTypedByUser = await getUserAnswerFromPrompt();
    const isPasswordCorrect = verifyAdminPassword(passwordTypedByUser)

    isPasswordCorrect ? setIsCorrectAdminPassword(true) : showPrompt()
}