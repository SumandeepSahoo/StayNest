# StayNest 🏡  
A modern and user-friendly rental/booking platform built with **Node.js, Express, MongoDB, and EJS**, designed to help users discover and book amazing stays.

---

## 📌 Features
- 🏠 **List Properties** – Users can list their properties with images, descriptions, and pricing.
- 🔍 **Search & Filter** – Search for destinations and filter properties based on user preferences.
- 📝 **Reviews & Ratings** – Users can leave reviews and ratings for listed properties.
- 🔐 **User Authentication** – Secure login and registration using Passport.js.
- 💾 **Image Upload** – Supports image uploads using Cloudinary.
- 📍 **Google Maps Integration** – Displays property locations on a map.
- 🛠 **Admin Controls** – Property owners can edit or delete their listings.

---

## 🚀 Tech Stack
- **Frontend:** HTML, CSS, Bootstrap, EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ORM)
- **Authentication:** Passport.js (Local Strategy)
- **Storage:** Cloudinary (for image uploads)
- **Session Management:** Express-Session, Connect-Mongo
- **Hosting:** Deployed on [Render](https://render.com/)

---

## 📦 Installation Instructions

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/SumandeepSahoo/StayNest.git
cd StayNest
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Set up environment variables**
Create a `.env` file in the root directory and add the following:
```sh
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### **4️⃣ Run the application**
```sh
npm start
```
The app will run on `http://localhost:8080`

---

## 🌐 Project Structure
```
StayNest/
│── models/          # Database models (User, Listing, Review)
│── routes/          # Express route handlers
│── views/           # EJS templates for frontend UI
│── public/          # Static assets (CSS, JS, images)
│── Utils/           # Custom error handling, middleware
│── app.js           # Main application file
│── .env             # Environment variables
│── package.json     # Dependencies and scripts
```

---

## 💪 Future Enhancements
- ✨ Implement advanced search filters
- ✨ Add real-time chat support
- ✨ Mobile app integration

---

## 📚 Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

---
