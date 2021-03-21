const verifyAdminPassword = (password) => {
    const adminPassword = "join"
    return (password === adminPassword)? true : false;
}

export default verifyAdminPassword;