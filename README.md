Iron Enterprise - Supply Market

**Tech Stack:**  
React.js | Spring Boot | MongoDB (NoSQL) | Selenium | OAuth2.0 | JWT

---

## 📖 Project Overview
**Iron Enterprise** is a B2B SaaS platform built for an iron material supplier, allowing businesses to place customized material cutting and profiling orders online.  
The platform features a fully functional **user portal** and **admin dashboard**, streamlining order placement, inventory management, and showcasing the company’s CNC cutting and machinery capabilities.

---

## 🚀 Key Features
### 🛒 User Interface
- User registration and login (secured with OAuth2 and JWT).
- Place orders by specifying material type, dimensions, and special profiling instructions.
- Track the status of placed orders in real-time.
- View company expertise in CNC profile cutting and machinery capabilities.

### 🛠️ Admin Interface
- Manage product inventory (add, update, delete materials).
- Oversee and update placed orders (accept, reject, schedule delivery).
- Maintain a catalog of CNC machines and services offered.

### 📦 Backend Services
- RESTful APIs built with Spring Boot for order management and inventory control.
- Integration with MongoDB (NoSQL database) for dynamic, scalable storage.
- OAuth2 and JWT authentication for secure API access.

### 🧪 Testing
- Automated UI testing with Selenium scripts.
- Focused on TDD (Test-Driven Development) for critical functionalities.

---

## 🛠️ Technologies Used
| Frontend  | Backend  | Database | Security  | Testing  |  
|:---------:|:--------:|:--------:|:---------:|:--------:|  
| React.js (Hooks, Context API) | Spring Boot (REST APIs) | MongoDB (NoSQL) | OAuth 2.0 + JWT  | Selenium |

---

## 🧩 Project Architecture
```
Frontend (React.js)
   ⬇️
Backend (Spring Boot APIs)
   ⬇️
MongoDB (NoSQL Database)
```
- Frontend and backend communicate through secured REST APIs.
- Event-driven order processing and real-time dashboard updates.
- Scalable architecture for growing catalog and orders.

---

## 🛡️ Security
- User authentication and authorization with OAuth2.0 and JWT.
- Role-based access control (User vs Admin).
- Secure storage and retrieval of order and inventory data.

---

## 📸 Screenshots
> (Optional: You can add a few screenshots here for the User dashboard, Admin panel, and Order placing form.)

---

## 📚 Getting Started

### Prerequisites:
- Node.js and npm installed
- Java 11+ and Maven installed
- MongoDB running locally or accessible remotely

### Setup Instructions:

**Frontend:**
```bash
cd frontend
npm install
npm start
```

**Backend:**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**MongoDB:**
- Set up collections for Users, Orders, Inventory.

---
