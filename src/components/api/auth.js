const SampleAuthProvider = {
    isAuthenticated: false,
    signin(callback){
        SampleAuthProvider.isAuthenticated = true;
        setTimeout(callback, 200)
    },
    signout(callback){
        SampleAuthProvider.isAuthenticated = false;
    }
}

export { SampleAuthProvider };