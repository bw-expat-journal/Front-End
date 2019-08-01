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
| POST _/sign-up_                | Create a user account                                                                         | `/signup`         |
| POST _/_                  | Login as an user                                                                                  | `/`          |

#### Request to Axios

#### Post _/sign-up_

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
      
#### Post _/_ 

```export default function Login(props) {
    // console.log(props)
    const [user, setUser] = useState({ email: "", password: "" })

    function inputHandler(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        // console.log(
        //   "inputHandler",
        //   event.target.name,
        //   event.target.value,
        //   updatedUser
        // );
        setUser(updatedUser);
      }
 ```
 
    


