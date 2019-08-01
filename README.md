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
 
    


|                                       [Rosa Perez](https://github.com/)                                        |                                       [Blake Prouty ](https://github.com/)                                        |                                       [Kenya Alston](https://github.com/)                                        |                                    
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://ca.slack-edge.com/T4JUEB3ME-UDZLJEN2D-e75204bf2aa8-48" width = "200" />](https://github.com/)                       |                      [<img src="https://ca.slack-edge.com/T4JUEB3ME-UH93VU0HH-cdc1a2d99083-48" width = "200" />](https://github.com/)                       |                      [<img src="https://files.slack.com/files-pri/T4JUEB3ME-FLRMWHM9P/kenya.jpg" width = "200" />](https://github.com/)                       |       
