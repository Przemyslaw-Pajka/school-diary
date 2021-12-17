export const getUserAnswerFromPrompt = () => {
    return new Promise((resolve, reject) => {
        resolve(window.prompt("Podaj hasło administratora"))
    })
}