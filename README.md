
Online Pharmacy Ordering System

An intuitive Single Page Application (SPA) where users can browse, search, and order medicines, while administrators manage stock using a  JSON Server-powered backend. Built using  HTML, CSS, and JavaScript, and deployed via  GitHub Pages (frontend) and  Render  (backend).

By Abdirahman Dagane



Description

This Online Pharmacy Ordering System demonstrates:

- Real-time search and filtering of medicine
- Shopping cart functionality
- Admin panel for medicine inventory management
- Full CRUD operations via `fetch()` with JSON Server
- Separation of frontend and backend folders
- A full-stack mini project using vanilla technologies


SCREENSHOT


 ![image alt](https://github.com/daganeabdul/Online-Pharmacy-Ordering-System/blob/main/unnamed%20(2).png?raw=true)

 
Features

User Side

- View medicine cards with image, description, and price
- Add items to a shopping cart
- Live search to filter medicines by name
- User-friendly, responsive UI

Admin Side

- Add new medicines using a form (name, description, price, image URL)
- Real-time form submission updates the backend using a  POST request
- Full backend data managed using  JSON Server



Live Demo

- Frontend (UI):  View Online Pharmacy UI 
         https://daganeabdul.github.io/Online-Pharmacy-Ordering-System/ 

- Backend (API): View JSON Server API
        https://online-pharmacy-api.onrender.com/medicines     Hosted on Render



How to Use Locally

Setup Instructions

1. Clone the repository:

  bash

   git clone https://github.com/daganeabdul/Online-Pharmacy-Ordering-System.git

   cd Online-Pharmacy-Ordering-System

Install backend dependencies:

 cd backend
 npm install


Start the backend server:

 node server.js
 The API will be available at:
  http://localhost:10000/medicines


Start the frontend:


Open index.html in your browser
 


Use Live Server in VS Code for auto-reload



 Project Structure
Online-Pharmacy-Ordering-System/

 backend/
     db.json          
     package.json     
      server.js      

 index.html       
 index.js           
 style.css            
 images/             
 README.md          


Sample API Data (db.json)

[
  {
    "id": 1,
    "name": "Paracetamol",
    "description": "Pain reliever and fever reducer",
    "price": 100,
    "image": "https://via.placeholder.com/100x100.png?text=Paracetamol"
  },
  {
    "id": 2,
    "name": "Ibuprofen",
    "description": "Used for pain and inflammation",
    "price": 80,
    "image": "https://via.placeholder.com/100x100.png?text=Ibuprofen"
  }
]


 Tech Stack
Frontend: HTML, CSS, JavaScript (ES6)


Backend: JSON Server, Node.js


Hosting: GitHub Pages (frontend), Render.com (backend)




License
MIT License






