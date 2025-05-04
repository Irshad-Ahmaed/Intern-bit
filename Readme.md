# 🛠️ Node.js CRUD App with Error Handling & Logging

This is a simple **CRUD application** built with **Node.js** and **Express**, interacting with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). It demonstrates:

- CRUD operations on posts
- Error handling for network, data format, and response errors
- A file-based logging system with timestamps and error stack traces
- A clean and scalable structure for educational or boilerplate use

---

## 🚀 Features

- ✅ GET, POST, PUT, DELETE endpoints for `posts`
- 🛡️ Graceful error handling
- 📝 Logging system with:
  - Timestamps
  - Error messages
  - Stack traces
- 📁 Log file (`logs/error.log`)

---

## 📦 Tech Stack

- Node.js
- Express.js
- Axios
- File-based logging (custom)

---

## 📂 Project Structure

crud-app/
├── app.js # Main server file
├── routes/
│ └── posts.js # CRUD route handlers
├── utils/
│ └── logger.js # Logging utility
├── logs/
│ └── error.log # Log file
├── package.json
└── README.md

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Irshad-Ahmaed/Intern-bit
cd Intern-bit
npm install
node app.js
```
### The server will start on http://localhost:3000
