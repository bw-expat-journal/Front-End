// import React, { Component,useState } from 'react';
// import axios from 'axios';


// const initialUser = {
//     username: '',
//     password: '',
//   }


// export default function Login(props) {
//     console.log(props)
//     const [user, setUsername] = useState('')

//     const inputHandler = event => {
//         const { name, value } = event.target;
//         setUsername({ user: { ...user, [name]: value } })
//       }
    
//     const submitHandler = event => {
//         event.preventDefault();
//         // add heruko api link here:
//         axios.post(`https://expatjournal.herokuapp.com/login`, user)
//           .then(res => {
//               console.log(res.data);
//             if (res.status === 200 && res.data) {
//               localStorage.setItem('jwt', res.data.token)
//               props.history.push('/')
//             } else {
//               throw new Error();
//             }
//           })
//           .catch(err => {
//             setUsername({
//               message: 'Authentication failed',
//               user: { ...initialUser }
//             })
//           })
//       }
    

// return (
//     <div className="login-form">
//     <div className="container">

//     <form onSubmit={submitHandler}>
//           <section>
//             <h1>Login Page</h1>
//           </section>
//     <label htmlFor="username">Username</label>
//     <input className="input" 
//         type="text"
//         id="username" 
//         name="username" required 
       // placeholder="Enter your username"
//         value={user.username}
//         onChange={inputHandler}
//         />
    
//     <label className="label">Password</label>
//     <input className="input" 
//         type="password"
//         id="password" 
//         name="password" required
       //placeholder="Enter password"
//         value={user.password}
//         onChange={inputHandler}
//         />
    
//     <button type="submit">Submit</button>
//     </form>
//     {/* {message
//           ? (<h4>{message}</h4>)
//           : undefined
//         } */}
//     </div>
// </div>
// );
// }