const AuthProvider = {
    isAuthenticated: false,
    signin(callback){
        AuthProvider.isAuthenticated = true;
        setTimeout(callback, 200)
    },
    signout(callback){
        AuthProvider.isAuthenticated = false;
    }
}

export { AuthProvider };