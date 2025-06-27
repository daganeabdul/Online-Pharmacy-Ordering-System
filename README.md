
 Online Pharmacy Ordering System
An intuitive, single-page application (SPA) where users can browse, search, and order medicines, while administrators can manage stock through a JSON Server-powered backend. Built with HTML, CSS, JavaScript, and deployed via Render and GitHub Pages.

 Live Demo
Frontend (User Interface): Online Pharmacy UI


Backend (API): JSON Server API



 Project Structure
Online-Pharmacy-Ordering-System/


 backend/
   db.json            # Sample medicine data
   package.json       # Backend dependencies (json-server, cors)
     server.js          # Custom JSON Server setup

index.html             # Main UI layout
 index.js               # JavaScript logic (fetch, render, search, admin form)
 style.css              # UI styling
images/                # Sample medicine images
README.md              # Project documentation


 Features
 User Side
View medicine cards with image, description, and price.


Add items to a shopping cart.


Live search to filter medicines by name.


 Admin Side
Add new medicines using the admin form (name, description, price, image URL).


Real-time form submission updates the backend (POST request).



 Setup Instructions (Local)
Clone the repo:

 git clone https://github.com/daganeabdul/Online-Pharmacy-Ordering-System.git
cd Online-Pharmacy-Ordering-System


Install JSON Server dependencies:

 cd backend
npm install


Start the backend server:

 node server.js
 Default port: http://localhost:10000/medicines


Open index.html in your browser to use the frontend.



 Deployment
Frontend: Deployed on GitHub Pages (gh-pages branch)


Backend: Deployed on Render (Node.js + JSON Server)



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
Frontend: HTML, CSS, JavaScript 


Backend: JSON Server + Node.js


Hosting: GitHub Pages (frontend), Render.com (backend)



 Credits
Developed by Abdirahman Dagane.

 
 License
This project is open-source under the MIT License.




