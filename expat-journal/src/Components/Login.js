// import React, { Component,useState } from 'react';
// import axios from 'axios';



// // const Form = styled.form`
// // @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
// // display: flex;
// // justify-content: center;
// // padding: 3px;
// // background: #f1ffff;
// // color: #1f4852;
// // font-size: 20px;
// // text-align: center;
// // legend {
// //   font-size: 1.5rem;
// //   font-family: 'Raleway', sans-serif;
// // }
// // label {
// //   display: flex;
// //   flex-direction: column;
// //   font-family: 'Raleway', sans-serif;
// // }
// // .fieldbox {
// //   background-color: #f1ffff;
// //   width: 500px;
// // }
// // input {
// //   margin: 8px;
// // }
// // .button {
// //   border-radius: 8px;
// //   border: none;
// //   color: white;
// //   padding: 15px 32px;
// //   margin: 15px;
// //   margin-top: 15px;
// //   background: #3C8C9E
// //   font-size: 1rem;
// // }
// // `

// const initialUser = {
//     email: '',
//     password: '',
//   }


// export default function Login(props) {
//     // console.log(props)
//     const [user, setUser] = useState({ email: "", password: "" })

//     function inputHandler(event) {
//         const updatedUser = { ...user, [event.target.name]: event.target.value };
//         // console.log(
//         //   "inputHandler",
//         //   event.target.name,
//         //   event.target.value,
//         //   updatedUser
//         // );
//         setUser(updatedUser);
//       }
      
    
//     function submitHandler(event) {
//         event.preventDefault();
//         // console.log("user state", user);
        
  
//         // add heruko api link here:
//         axios.post(`https://expat-journals.herokuapp.com/api/v1/auth/login`, user)
//           .then(res => {
//               console.log(res.data);
//             if (res.status === 200 && res.data) {
//               localStorage.setItem('token', res.data.token)
//               props.history.push('/')
//             }
//           })
//           .catch(err => {
//             //setUser({
//               //message: 'Authentication failed',
//               //user: { ...initialUser }
//             //})
//             if (err) console.log(err)
//           })
      
//         }  

// return (
//     <div className="login-form">
//     <div className="container">

//     <form onSubmit={submitHandler}>
//           <section>
//             <h1>Login Page</h1>
//           </section>
//     <label htmlFor="email">email</label>
//     <input className="input" 
//         type="text"
//         id="email" 
//         name="email" required
//         placeholder="Enter your email"
//         value={user.email}
//         onChange={inputHandler}
//         />
    
//     <label className="label">Password</label>
//     <input className="input" 
//         type="password"
//         id="password" 
//         name="password" required 
//         placeholder="Enter password"
//         value={user.password}
//         onChange={inputHandler}
//         />
    
//     <button type="submit">Submit</button>
//     </form>
//     {/* {message
//           ? (<h4>{message}</h4>)
//           : undefined
//         }  */}
//     </div>
// </div>
//   );
// }


// ///Styled Components

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// background: #f1ffff;
// padding: 5px;
// margin:5px;
// border-radius: 8px;
// color: #1f4852;
// font-size: 20px;
// width: 40rem;
// margin-top: 5rem;

// `
// const Legend = styled.legend`
// font-size: 28px;
// margin: 26px;


// `

// const Button = styled.button`
// border-radius: 8px;
// border: none;
// color: white;
// padding: 15px 32px;
// margin: 15px;
// margin-top: 15px;
// background: #3C8C9E
// font-size: 1rem;
// `
// const Inputs = styled.div`
// margin: 5px;
// display: flex;
// flex-direction: column;
// `

// const Inputt = styled.input`
// border: solid 1.8px #aacddf;
// border-radius: 8px;
// width: 27rem;
// height: 2rem;
// `

// const Span = styled.span`
// margin-bottom: 15px;
// font-size: 19px;
// `