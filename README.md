# School Management API

## Overview

This project provides REST APIs for managing school data.
Users can add schools and retrieve a list of schools sorted by proximity to a given location.

The APIs are built using **Node.js**, **Express.js**, and **MySQL**, and deployed for public access.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* Render (API Hosting)
* Railway / Cloud MySQL
* Postman (API Testing)

---

## Features

* Add a new school with location coordinates
* Retrieve schools sorted by distance from a user location
* Input validation for API requests
* RESTful API architecture
* Cloud deployment with live API access

---

## Project Structure

```
school-management-api
│
├── config
│   └── db.js
│
├── controllers
│   └── schoolController.js
│
├── routes
│   └── schoolRoutes.js
│
├── utils
│   └── distance.js
│
├── app.js
├── package.json
└── README.md
```

---

## Database Schema

### Table: schools

| Field     | Type    | Description          |
| --------- | ------- | -------------------- |
| id        | INT     | Primary Key          |
| name      | VARCHAR | School name          |
| address   | VARCHAR | School address       |
| latitude  | FLOAT   | Latitude coordinate  |
| longitude | FLOAT   | Longitude coordinate |

SQL Query:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
```

---

## API Endpoints

### 1. Add School

**Endpoint**

```
POST /api/addSchool
```

**Request Body**

```json
{
  "name": "ABC School",
  "address": "Hyderabad",
  "latitude": 17.385,
  "longitude": 78.4867
}
```

**Response**

```json
{
  "message": "School added successfully",
  "id": 1
}
```

---

### 2. List Schools by Proximity

**Endpoint**

```
GET /api/listSchools
```

**Query Parameters**

```
latitude
longitude
```

Example:

```
/api/listSchools?latitude=17.38&longitude=78.48
```

**Response**

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Hyderabad",
    "latitude": 17.385,
    "longitude": 78.4867,
    "distance": 1.3
  }
]
```

Schools are sorted by **distance from the user location** using the **Haversine formula**.

---

## Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/Avinash-Alapati/school-management-api.git
cd school-management-api
```

### 2. Install dependencies

```
npm install
```

### 3. Create .env file

```
dbPass=your_mysql_password
```

### 4. Start the server

```
node app.js
```

Server will run at

```
http://localhost:5000
```

---

## Live API

Base URL:

```
https://your-render-url.onrender.com
```

Example:

```
https://your-render-url.onrender.com/api/listSchools?latitude=17&longitude=78
```

---

## Postman Collection

API requests can be tested using Postman.

Postman Collection Link:

```
https://avinashh-26-7448418.postman.co/workspace/school-managemenr-api~580226a0-0ed7-4275-b94e-2a721d0c8ff1/collection/48447502-b311a360-e4da-4c99-8285-d0b851529b1d?action=share&creator=48447502
```

---

## Author

Avinash Alapati

GitHub:
https://github.com/Avinash-Alapati

LinkedIn:
https://linkedin.com/in/avinash-alapati
