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

### Frontend
- **HTML5** - Markup language
- **CSS3** - Styling
- **JavaScript** - Client-side scripting
- **Bootstrap** - Responsive UI framework
- **EJS** - Templating engine

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Passport.js** - Authentication middleware
- **Multer** - File upload handling

### Database
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB

### Cloud Services
- **Cloudinary** - Image storage and management

### Architecture
- **MVC Pattern** - Model-View-Controller design pattern

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

### Homepage - Landing Page
![Homepage](./images/Screenshot%202025-12-05%20134249.png)
*Clean and simple landing page welcoming visitors to explore travel destinations*

### Listing Details
![Listing Details](./images/Screenshot%202025-12-05%20134323.png)
*Detailed destination page showing complete information, image gallery, location map, and user reviews when clicking on any listing*

### Create Listing
![Create Listing](./images/Screenshot%202025-12-05%20134420.png)
*Listing page displaying destination details with user reviews and ratings visible below*

### Search & Filter
![Search and Filter](./images/Screenshot%202025-12-05%20134439.png)
*Search functionality allowing users to find destinations by entering location names or keywords in the search bar*

### User Authentication
![Login/Signup](./images/Screenshot%202025-12-05%20134458.png)
*User registration page where new users can create an account to access all platform features*

### Filtered Results
![Filtered Listings](./images/Screenshot%202025-12-05%20134747.png)
*Create new listing page with a user-friendly form where users can add their travel destinations with details and images*

### Review System
![Reviews](./images/Screenshot%202025-12-05%20134824.png)
*Search results page displaying listings filtered by user query, showing matching destinations based on search terms*

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
