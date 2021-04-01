const logOut = (history) => {
    history.goBack()
    sessionStorage.setItem('login',null)
}

export default logOut;
