# Portfolio-messaging

A simple API to handle messages submited on my portfolio

## Routes

| VERB   | ACTION                | AUTHENTICATED | ENDPOINT          | REQUEST BODY                                                                                   | RESPONSE                                |
|--------|-----------------------|---------------|-------------------|------------------------------------------------------------------------------------------------|-----------------------------------------|
| LOGIN  | Login                 | NO            | /api/login        | { "email" : String, "password": String }                                                       | { "userId" : String, "token" : String } |
| POST   | Post message          | NO            | /api/messages     | { "name" : String, "email" : String, "phone" : Number, "subject" : String, "content" : String} | { api message }                         |
| GET    | Get all messages      | YES           | /api/messages     | -                                                                                              | [ { message }, ... ]                    |
| GET    | Get one message       | YES           | /api/messages/:id | -                                                                                              | { message }                             |
| PUT    | Change message status | YES           | /api/messages/:id | -                                                                                              | { api message }                         |
| DELETE | Delete one message    | YES           | /api/messages/:id | -                                                                                              | { api message }                         |

