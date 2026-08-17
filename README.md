
<div align="center">

# 📚 Express Book Review API

A server-side REST API built with Node.js and Express, featuring JWT-based authentication and asynchronous data fetching for managing an online book review application.

[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
<br>
[![IBM Certification](https://img.shields.io/badge/IBM-Full%20Stack%20Software%20Developer%20Professional-blue?style=for-the-badge&logo=ibm)](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)
[![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)](#)


</div>

---

## 📌 Project Overview

This project is a robust server-side web application designed to manage an online book review platform. Built using **Node.js** and **Express.js**, the application exposes a secure REST API that allows users to register, authenticate via JSON Web Tokens (JWT), and interact with a database of books.

Developed as part of a Coursera lab, this repository heavily emphasizes modern JavaScript backend paradigms, specifically asynchronous programming utilizing **Promises** and **Async/Await** to ensure non-blocking HTTP request handling.

---

## 🏗️ API Workflow & Authentication

```text
┌───────────────┐       ┌────────────────────┐       ┌────────────────────┐
│               │       │   Public Routes    │       │                    │
│ Client / User │ ────> │ (Search / Get All) │ ────> │  Read Book Data    │
│               │       │                    │       │                    │
├───────────────┤       ├────────────────────┤       ├────────────────────┤
│               │       │  Protected Routes  │       │                    │
│ Authenticated │ ────> │ (JWT Session Auth) │ ────> │ Add / Edit / Drop  │
│ User (w/ JWT) │       │                    │       │   Book Reviews     │
└───────────────┘       └────────────────────┘       └────────────────────┘
```
```mermaid
graph LR
    subgraph Clients ["👥 Clients"]
        direction TB
        Guest(["👤 Guest User"])
        Auth(["🔐 Authenticated User<br>(w/ JWT)"])
    end

    subgraph API ["⚙️ Express API"]
        direction TB
        Public["🌐 Public Routes<br>(Search / Get All)"]
        Protected["🛡️ Protected Routes<br>(JWT Session Auth)"]
    end

    subgraph Actions ["🗄️ Data Actions"]
        direction TB
        Read[("📖 Read Book Data")]
        Write[("📝 Add / Edit / Drop<br>Book Reviews")]
    end

    Guest -->|"HTTP GET"| Public
    Public -->|"Retrieves Data"| Read

    Auth -->|"HTTP POST/PUT/DELETE"| Protected
    Protected -->|"Modifies DB"| Write

    style Guest fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    style Auth fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
    style Public fill:#f3e5f5,stroke:#8e24aa,stroke-width:2px,color:#000
    style Protected fill:#f3e5f5,stroke:#8e24aa,stroke-width:2px,color:#000
    style Read fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    style Write fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
```
---

✨ Key Features Implemented

•	User Authentication: Secure registration and login flows utilizing session-level JWT authentication.

•	Public REST Endpoints: Retrieve the complete catalog of books or perform targeted searches by ISBN, Author, or Title.

•	Protected REST Endpoints: Authenticated users can publish, modify, or permanently delete their own book reviews.

•	Asynchronous Operations: Fully implemented Promises and Async/Await architecture to simulate real-world database fetching.

•	Modular Routing: Clean separation of concerns between public access routes and authenticated-only routing.

---

## 🛠️ Core Tech Stack

| Category | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Backend Environment**| Node.js | Server runtime for executing JavaScript outside the browser |
| **Web Framework** | Express.js | Handling HTTP REST routing and middleware integration |
| **Authentication** | JSON Web Tokens (JWT)| Securing user sessions and protecting sensitive API endpoints |
| **Asynchronous Logic**| Promises, Async/Await | Handling non-blocking server operations and data retrieval |

---
## 📸 Visual Proof

The following screenshots demonstrate the server initialization and the successful validation of the REST API endpoints using Postman.

**1. Server Initialization & Route Testing (ISBN)**  
*This view captures the complete developer environment in the Cloud IDE. The terminal shows the successful installation of dependencies and the Express server running on the designated port. The Postman interface at the bottom verifies a successful `GET` request to retrieve a specific book's details using its ISBN.*
![Server Running and ISBN Route](screenshot1.png)

**2. Public API Catalog Retrieval**  
*Validating the primary public endpoint via Postman. The application successfully processes the `GET` request and returns an HTTP `200 OK` status along with the complete, correctly formatted JSON database of all available books.*
![Full Book Catalog Retrieval](screenshot2.png)

---

## 📁 Project Structure

```text
expressBookReviews/
├── final_project/             # Main application directory
│   ├── router/
│   │   ├── auth_users.js      # Protected routes requiring JWT (add/edit/delete reviews)
│   │   ├── general.js         # Public API routes (get books, search, register)
│   │   └── booksdb.js         # Mock database containing the book catalog
│   ├── index.js               # Application entry point, server, and middleware config
│   └── package.json           # Node.js dependencies and script commands
├── .DS_Store                  # macOS custom directory attributes
├── .gitignore                 # Specifies intentionally untracked files for Git
├── LICENSE                    # Project license (Apache 2.0)
├── README.md                  # Project documentation
├── screenshot1.png            # Visual proof: Server running & ISBN route test
└── screenshot2.png            # Visual proof: Public API catalog retrieval
```

---

## ⚙️ Local Setup & Execution

To test the API endpoints locally on your machine:
1. Clone the Repository
```text
git clone [https://github.com/HAMED-PAYANDA/expressBookReviews.git](https://github.com/HAMED-PAYANDA/expressBookReviews.git)
cd expressBookReviews/final_project
```

2. Install Dependencies
Ensure you have Node.js installed, then install the required Node modules:
```text
npm install
```

3. Run the Server
Launch the Node/Express server:
```text
npm start
# OR
node index.js
```

The server will initialize and begin listening for API requests on the designated local port.

---

## 📜 License

This project is licensed under the [Apache 2.0 License](LICENSE).

---

## 👤 Author

**Hamed Payanda**
* **GitHub:** [@HAMED-PAYANDA](https://github.com/HAMED-PAYANDA)
* Completed as part of the **IBM Full-Stack Software Developer Professional**.

