## 🛍️ Ecommerce – MERN Stack Clothing Store

Ecommerce is a full-stack web application built with the MERN stack for buying clothing, footwear, and accessories for men, women, and kids. It includes both an **admin dashboard** and a **shopping interface**, supporting user authentication, cart management, order tracking, reviews, payments (PayPal), and more.

---

### 🚀 Features

#### 🛒 Shopping

- Browse and search products (by category, keywords)
- Add/remove items from cart
- Address management during checkout
- Order placement with PayPal integration
- Product reviews

#### 🔐 Authentication

- User registration & login
- Protected routes with session tokens (JWT)
- Auth checks using `CheckAuth` component

#### 🧑‍💼 Admin Dashboard

- View dashboard stats
- Add/edit/delete products
- Manage orders
- Manage site-wide features

---

### ⚙️ Tech Stack

- **Frontend**: React, React Router, Redux, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT + Cookie-based session
- **Image Uploads**: Cloudinary + Multer
- **Payment Integration**: PayPal (sandbox mode)
- **Other Tools**: EJS, bcryptjs, dotenv, CORS, method-override

---

### 📋 Prerequisites

Before you start, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18.x or above recommended)
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** account _or_ a local MongoDB server
- A **Cloudinary** account (for product image uploads)
- A **PayPal Developer** account (to get sandbox credentials)

---

### 🛠️ Setup Instructions

#### 🔄 Clone the repository

```bash
git clone https://github.com/pprachhiii/E-commerce-app.git
cd E-commerce-app
```

#### 🖥️ Backend

```bash
cd backend
npm install
npm run dev
```

#### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

> Make sure to configure `.env` in both frontend and backend if needed.

---

Great additions! Here's how these sections would look in your `README.md` — styled to match the rest of the document and fully integrated:

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a branch, and open a pull request with your changes.

---

## 📌 Additional Notes

- Ensure MongoDB is properly set up (e.g., using MongoDB Atlas or a local MongoDB instance).
- The backend API must be running before the frontend is accessible for real-time messaging.
- Make sure that the `.env` file contains the correct values for the MongoDB URI .
- If you're using external services (e.g. Cloudinary, PayPal), make sure their API keys are active and valid.
