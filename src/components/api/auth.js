const SampleAuthProvider = {
    isAuthenticated: false,
    signin(callback){
        SampleAuthProvider.isAuthenticated = true;
        setTimeout(callback, 200)
    },
    signout(callback){
        SampleAuthProvider.isAuthenticated = false;
        setTimeout(callback,100)
    }
}

// const makeAuthenticatedRequest = async (url, method, body) => {
//     const user = await User.findOne({ username: localStorage.getItem("username") })
//     const password = localStorage.getItem("password")

//     const base64Credentials = Buffer.from(`${user.username}:${password}`).toString("base64")

//     const request = {
//         method,
//         headers: {
//             "Authorization": `Basic ${base64Credentials}`
//         },
//         body, 
//     }

//     const response = await fetch(url, request)

//     if(response.status !== 200){
//         throw new Error(`Request failed with status code ${response.status}`)
//     }

//     return await response.json();
// }


// const response = await fetch('/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: 'username',
//       password: 'password',
//     }),
//   });
  
//   const data = await response.json();
  
//   if (data.success) {
//     // The login was successful
//   } else {
//     // The login failed
//   }
  



export { SampleAuthProvider };

