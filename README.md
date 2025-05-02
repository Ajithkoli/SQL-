
# 🎯 User Management App (Node.js + MySQL + Faker)

This is a simple web application built with **Express.js**, **MySQL**, and **Faker.js** that allows you to:

- View user count
- List all users
- Edit usernames securely with password verification
- (Future) Add and delete users

---

## 📌 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Templating**: EJS
- **Libraries**: 
  - `@faker-js/faker` for dummy data
  - `uuid` for unique IDs
  - `method-override` to support PATCH/PUT with forms

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Ajithkoli/SQL-.git
cd SQL-
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the MySQL database

Open MySQL and run:

```sql
CREATE DATABASE delta_app;

USE delta_app;

CREATE TABLE user (
  user_id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);
```

### 4. Run the app

```bash
node index.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 Routes Overview

| Method | Route            | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/`              | Homepage showing user count   |
| GET    | `/user`          | Show all users                |
| GET    | `/user/:id/edit` | Edit form for a specific user |
| PATCH  | `/user/:id`      | Update username with password |
| PUT    | `/users/new`     | (Planned) Add new user        |
| DELETE | `/user/:id`      | (Planned) Delete a user       |

---

## ✨ Features

* Secure username editing (password check)
* Clean and modular route handling
* Easy to expand (add/create/delete functionality)
* Faker-powered test user data generation

---

## 📁 Project Structure

```
📦 project-root/
├── views/           # EJS templates
│   ├── home.ejs
│   ├── user.ejs
│   └── edit.ejs
├── index.js         # Main server file
├── package.json
└── README.md
```

---

## 🛠 Dependencies

```bash
npm install express mysql2 ejs method-override @faker-js/faker uuid
```

---

## 👨‍💻 Author

**Ajith Koli**
GitHub: [@Ajithkoli](https://github.com/Ajithkoli)

---


