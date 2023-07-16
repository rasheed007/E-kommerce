# E - kommerce App
This is an online market place api for sellers and buyers

---

## Requirements
1. Users should be able to create, read, update and delete products.
2. Users should be able to login.
3. The uploaded products should be saved to a database.

---
## Setup
- Install NodeJS, express, Mongoose
- pull this repo
- update env with example.env

## Models
---

### User
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  email     | string  |  required |
|  password |   string |  required  |


### Products
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  title |  required |
|  description | required | 
|   Price |   required |
|   Image Url | required |




## APIs
---

### Signup User

- Route: /signup
- Method: POST
- Body: 
```
{
  "email": "doe@example.com",
  "password": "Password1",
}
```

- Responses

Success
```
{
    Status: 'True',
    user: {
        "email": "doe@example.com",
        "password": "Password1",
    }
}
```
---
### Login User

- Route: /login
- Method: POST
- Body: 
```
{
  "password": "Password1",
  "username": 'jon_doe",
}
```

- Responses

Success
```


---
### Create Products

- Route: /add-product
- Method: POST
- Header
    - Authorization: Bearer {token}
- Body: 
```
{
    Title: {}
    ImageUrl: {}
    price: {}
    description: {}
}
```


```
---
### Get products

- Route: /products/:productId
- Method: GET
- Header
    - Authorization: Bearer {token}
- Responses

```
---

### Get Products

- Route: /
- Method: GET
- Header:
    - Authorization: Bearer {token}
- Query params: 
    - page (default: 1)
    - per_page (default: 2)


## Author
- Rasheed Olayanju