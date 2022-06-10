# Portfolio-messaging

A simple API to handle messages submited on my portfolio

## Stack
- Node.JS
- Express
- MongoDB

## Dependencies
- Express-rate-limit
- Dotenv
- Helmet
- Joi
- Jsonwebtoken
- Mongoose
- Nodemon

## Installation

### 1. Install dependencies
Install dependencies with the following command :
````
npm install 
````
### 2. Create database
Go to the [MongoDb](https://www.mongodb.com/) site and create an account.

Once the account is created, create your database. Make sure to configure it so that the users can run the application on their own machine :
**Network Access -> Allow access from anywhere**

Once the database is created, you should have :

- A database connection ID
- A database password

### 3. Set environment variables

At the root of the project folder, create an .env file that will contain your MongoDB connection credentials and the token encryption key :
````
dbUserName = database connection ID (String)
dbPassword = database password (String)
JWT_SECRET_TOKEN = String
````

At the root of the project folder, create a .gitignore file in which you place the node modules and the .env file :
````
/node_modules
/.env
````

### 4. Launch

Launch the local server with :
````
nodemon server
````

If all goes well, the following messages appear in the terminal:

**Listening on port 3000**

**Connected to MongoDB database !**


## Routes

| VERB   | ACTION                | AUTHENTICATED | ENDPOINT          | REQUEST BODY                                                                                   | RESPONSE                                |
|--------|-----------------------|---------------|-------------------|------------------------------------------------------------------------------------------------|-----------------------------------------|
| LOGIN  | Login                 | NO            | /api/login        | { "email" : String, "password": String }                                                       | { "userId" : String, "token" : String } |
| POST   | Post message          | NO            | /api/messages     | { "name" : String, "email" : String, "phone" : String, "subject" : String, "content" : String} | { api message }                         |
| GET    | Get all messages      | YES           | /api/messages     | -                                                                                              | [ { message }, ... ]                    |
| GET    | Get one message       | YES           | /api/messages/:id | -                                                                                              | { message }                             |
| PUT    | Change message status | YES           | /api/messages/:id | -                                                                                              | { api message }                         |
| DELETE | Delete one message    | YES           | /api/messages/:id | -                                                                                              | { api message }                         |

