# welcome to the leh lakpa creation 
This document as a user guide to help you get started.

## POSTMAN Api network
### Admin Register
`POST http://localhost:5000/api/v1/users/register`
```json
{
    "fullname":"example",
    "username":"leh_example",
    "password":"lehhhhhhhhh.ex"
}
```

### Admin Login
`POST http://localhost:5000/api/v1/users/login`
```json
{
    "username":"leh_example"
    "password":"lehhhhhhhhh.ex"
}
```

### Admin Logout
`GET http://localhost:5000/api/v1/users/logout`


# Installation
1.  Clone the repository: `git clone <repository-url>`
2.  Navigate to the project directory: `cd <project-directory>`
3.  Install dependencies: `npm install` or `pip install -r requirements.txt`
