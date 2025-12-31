<div align="center">
  <img src="./public/icon/favicon.svg" alt="Wanderlust Logo" width="120" height="120">
</div>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?logo=passport)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Render.com-46E3B7?logo=render&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6C37)
![MVC](https://img.shields.io/badge/Architecture-MVC-blue)
![CRUD](https://img.shields.io/badge/CRUD-Operations-success)


# 🌍 Wanderlust – Travel Destination Listing Platform

A dynamic full-stack web application for creating, browsing, and managing travel destination listings. Built with the MERN stack and following MVC architecture.

## 🔗 Live Demo

**[Visit Wanderlust](https://majorproject-8a3f.onrender.com/listings)**

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
- [Additional Functionalities](#additional-functionalities)
- [User Flow](#user-flow)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

Wanderlust is a comprehensive travel listing platform developed during my full-stack development journey at Apna College. The application allows users to discover, create, and manage travel destinations with rich features including authentication, image uploads, reviews, and advanced search capabilities.

---

## 🚀 Tech Stack

### 🎨 Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8BC34A)

- **HTML5** – Structure & markup  
- **CSS3** – Styling & layout  
- **JavaScript** – Client-side scripting  
- **Bootstrap** – Responsive UI framework  
- **EJS** – Server-side templating engine  

---

### ⚙️ Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?logo=passport)
![Multer](https://img.shields.io/badge/Multer-FF6C37)

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web application framework  
- **Passport.js** – Authentication middleware  
- **Multer** – File upload handling  

---

### 🗄️ Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000)

- **MongoDB Atlas** – Cloud database  
- **Mongoose** – ODM for MongoDB  

---

### ☁️ Cloud Services
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Render.com-46E3B7?logo=render&logoColor=white)

- **Cloudinary** – Image storage & optimization  
- **Render** – Hosting & deployment  

---

### 🧩 Architecture
![MVC](https://img.shields.io/badge/Architecture-MVC-blue)
![CRUD](https://img.shields.io/badge/CRUD-Operations-success)

- **MVC Pattern** – Model-View-Controller structure  

---

## ⭐ Core Features

### 🔐 Authentication & Authorization
- User registration and login system
- Session management with Express Session
- Password encryption and secure authentication
- Authorization: Only listing owners can edit/delete their posts

### 🏞️ Listing Management (CRUD Operations)
- **Create**: Add new travel destinations with details
- **Read**: Browse all available listings
- **Update**: Edit your own listings
- **Delete**: Remove your listings

### ☁️ Image Upload System
- Cloud-based image storage using Cloudinary
- Multiple image upload support with Multer
- Automatic image optimization and delivery

### ⭐ Review & Rating System
- Users can add reviews to any listing
- Star-based rating system
- Comment functionality
- Users can edit/delete their own reviews
- Average rating display for each listing

### 🔍 Advanced Search & Filter
- **Category-based browsing**: Filter by destination type
- **Query search**: Search by title, keywords, or location
- **Price range filtering**: Find listings within budget
- **Location-based search**: Filter by country or region
- **Combined filters**: Use multiple filters simultaneously

### 📱 Responsive Design
- Mobile-first approach
- Clean and modern UI/UX
- Bootstrap-powered responsive layouts
- Cross-browser compatibility

---

## 🧭 Additional Functionalities

- **Flash Messages**: Real-time user feedback for actions
- **Custom Error Pages**: User-friendly error handling with EJS templates
- **Middleware Architecture**: Clean, reusable middleware functions
- **Form Validation**: Server-side validation for data integrity
- **Reusable Components**: Modular EJS layouts and partials
- **User Profiles**: Profile-based listing management
- **Session Persistence**: Secure session storage with MongoDB

---

## 🎯 User Flow

1. **Sign Up / Login** 👤
   - New users create an account
   - Existing users log in with credentials

2. **Browse Listings** 🔍
   - View all available travel destinations
   - Use filters and search to find specific locations
   - Browse by categories

3. **Create Listing** ✍️
   - Add new travel destination
   - Upload images from device
   - Provide details (title, description, price, location, country)

4. **View Listing Details** 📖
   - See complete listing information
   - View all images in gallery
   - Read reviews and ratings from other users

5. **Add Reviews** ⭐
   - Logged-in users can submit reviews
   - Rate destinations with star system
   - Add detailed comments

6. **Manage Your Content** 🛠️
   - Edit your own listings
   - Delete your listings
   - Manage your reviews

---

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chhatrapati-sahu-09/-majorproject.git
   cd majorproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add the required environment variables (see [Environment Variables](#environment-variables))

4. **Initialize the database (optional)**
   ```bash
   node init/index.js
   ```

5. **Start the application**
   ```bash
   # Development mode with nodemon
   npm start
   
   # Or production mode
   node app.js
   ```

6. **Open in browser**
   ```
   http://localhost:8080
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Atlas Connection
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority

# Session Secret (use a strong random string)
SECRET=your-super-secret-key-here

# Cloudinary Configuration
CLOUD_NAME=your-cloudinary-cloud-name
CLOUD_API_KEY=your-cloudinary-api-key
CLOUD_API_SECRET=your-cloudinary-api-secret

# Node Environment
NODE_ENV=development
```

### How to Get Credentials:

**MongoDB Atlas:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Go to Database Access → Add user
4. Go to Network Access → Add IP (use `0.0.0.0/0` for all IPs or your specific IP)
5. Get connection string from Connect → Connect your application

**Cloudinary:**
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard
3. Copy your Cloud Name, API Key, and API Secret

---

## 🎮 Usage

### For Users:
1. **Register/Login** to access all features
2. **Browse** listings on the homepage
3. **Search** using the search bar or filters
4. **Click** on any listing to see details
5. **Add reviews** to share your experience
6. **Create listings** to share new destinations

### For Developers:
```bash
# Run in development mode
npm start

# Run tests (if configured)
npm test

# Build for production

npm run build

```

---

## 📁 Project Structure

```
majorproject/
├── controllers/          # Request handlers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/              # Database schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Route definitions
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── includes/        # Reusable partials
│   ├── layouts/         # Layout templates
│   ├── listings/        # Listing views
│   └── users/           # User views
├── public/              # Static assets
│   ├── css/
│   ├── js/
│   └── icon/
├── utils/               # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
├── init/                # Database initialization
│   ├── data.js
│   └── index.js
├── middleware.js        # Custom middleware
├── schema.js            # Validation schemas
├── cloudConfig.js       # Cloudinary configuration
├── app.js              # Main application file
├── package.json
└── .env                # Environment variables (not in repo)
```

---

## 📸 Screenshots

### 1. Homepage – Explore Travel Listings
![Homepage](./images/Screenshot%202025-12-05%20134249.png)
*The Wanderlust homepage where users can browse featured travel destinations. It displays listings with images, pricing, categories, and location details in a clean grid layout. The top navigation includes search, category filters, login/signup, and add-home options.*

### 2. Individual Listing Page – Full Details View
![Listing Details](./images/Screenshot%202025-12-05%20134323.png)
*This page shows the complete details of a selected travel destination. Users can view high-resolution images, listing descriptions, owner information, price, location, and country. The layout ensures a clean, immersive experience focused on the destination.*

### 3. Reviews Section – User Feedback & Ratings
![Create Listing](./images/Screenshot%202025-12-05%20134420.png)
*Each listing includes a review section where users can share their experiences. Reviews display usernames, star ratings, and comments. This helps new visitors evaluate the authenticity and quality of the listing.*

### 4. More Listings – Category-Based Browsing
![Search and Filter](./images/Screenshot%202025-12-05%20134439.png)
*This section displays additional accommodation options such as luxury resorts, heritage rooms, and budget stays. Users can browse listings filtered by categories like rooms, iconic cities, mountains, farms, and more.*

### 5. Signup Page – Create a New Account
![Login/Signup](./images/Screenshot%202025-12-05%20134458.png)
*The signup page allows users to register on Wanderlust using a username, email, and password. The UI is simple, clean, and focused on easy onboarding for new users.*

### 6. Create a New Listing – Add a Property
![Filtered Listings](./images/Screenshot%202025-12-05%20134747.png)
*This form enables authenticated users to create a new travel listing. Users can upload images, write descriptions, select categories, enter pricing, country, and location. The form integrates Multer & Cloudinary for image uploads and uses server-side validation.*

### 7. Search Results – Query-Based Filtering
![Reviews](./images/Screenshot%202025-12-05%20134824.png)
*Users can search listings using keywords like "Cottage". The platform returns matching results and displays a success message indicating the applied search filter. This feature allows users to quickly find specific types of properties.*

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Chhatrapati Sahu**

- GitHub: [@Chhatrapati-sahu-09](https://github.com/Chhatrapati-sahu-09)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

---

## 🙏 Acknowledgments

- **Apna College** - For the comprehensive full-stack development course
- **MongoDB Atlas** - For cloud database hosting
- **Cloudinary** - For image storage and management
- **Render** - For application hosting
- All contributors and users of this project

---

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact me via LinkedIn
- Check the documentation

---

## 🌟 Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Happy Traveling! 🌍✈️**
