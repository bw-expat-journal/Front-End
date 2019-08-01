# Expat Journal

Expat Journal is an app that avails travellers (expatriate) the ability to show off the places they have been and remember them for theirselves.

Check out the Application [Here](https://expatjournal.netlify.com/)


# Link to Product Canvas 
https://docs.google.com/document/d/1EGGg6r0eoXauKAv70OptMaCKRBlZm1BM_5miGzqpHQI/edit?usp=sharing

## Installation

### Clone this repository and navigate into

`git clone https://github/bw-expat-journal/Front-End.git && cd Front-End`

### Install Dependencies

`yarn install`

#### Add Neccessary Environment Viariable

- yarn
- styled components
- react-router-dom

#### Start the Application

`yarn start`

---

## Documentation 

This application is deployed on [netlify](https://expatjournal.netlify.com/) with the following routes accessible

| Method                              | Functionality                                                                                 | Route                    |
| ----------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------- |
|  _/sign-up_                | Create a user account                                                                         | `/signup`         |
|  _/_                  | Login as an user                                                                                  | `/`          |

#### Request to Axios

#### _/sign-up_

```  const registerUser = (newUser) => {
        axios.post('https://expat-journals.herokuapp.com/api/v1/auth/signup',newUser)
  
        .then(response => {
          console.log('user', response.data.token)
          localStorage.setItem('token', response.data.token)
          props.history.push('/journals')

          
        })
  
        .catch(error => {
          console.log('ERROR', error.response)
        })
      } 
```
      
####  _/_ 

```     // add heruko api link here:
        axios.post(`https://expat-journals.herokuapp.com/api/v1/auth/login`, user)
          .then(res => {
              console.log(res.data);
            if (res.status === 200 && res.data) {
              localStorage.setItem('token', res.data.token)
              props.history.push('/journals')
            }
          })
          .catch(err => {
            //setUser({
              //message: 'Authentication failed',
              //user: { ...initialUser }
            //})
            if (err) console.log(err)
          })
      
        
 ```
 
    
    
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
