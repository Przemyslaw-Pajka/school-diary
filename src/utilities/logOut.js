export const logOut = (history) => {
    history.goBack()
    sessionStorage.setItem('login', null)
}