# -E-Commerce-follow-along
It contains 4 parts.
User Authentication: Register and log in users.
Product Management: Add, update, and retrieve product data.
Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format (typically JSON). User Authentication: Register and log in users. Product Management: Add, update, and retrieve product data. Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format (typically JSON).


Project Overview:- 

1.MERN Integration: Full-stack JavaScript development for seamless front-end and back-end communication.

2.REST APIs: Scalable endpoints for managing users, products, and orders.

3.Database Schema: Models for users, products, and orders, optimized for performance.

4.Backend Setup: Efficient routing and middleware handling with Express.js.

5.Authentication: Secure login and role-based access control using bcrypt and JWT.

6.Order Page:- -->Admin: View and manage all user orders. -->Users: Track personal order history and statuses.

7.Product Page: Interactive product catalog with search, filter, and details view.

8.Payment Gateway:Seamless integration with Stripe/PayPal for secure transactions, Handles payment success, failure, and refunds.

New Feature Added:

-->Login Page: A user-friendly login page has been added, featuring: Email and password validation. A "Show/Hide Password" toggle for enhanced user experience. Error handling for invalid email format and password length. Loading state to indicate the process of authentication. Navigation to a signup page for new users.

-->Technologies Used: React (Frontend) Tailwind CSS (Styling) React Router (Routing) Express.js (Backend) Stripe/PayPal (Payment Gateway)

-->Installation & Setup: Clone the repository. Run npm install to install dependencies. Start the development server with npm start.


# Milestone 3 - Backend Setup and Integration

## Overview
In this milestone, you will set up the foundational elements for your backend. You'll organize your backend code efficiently, configure a Node.js server to handle API requests, connect to MongoDB for data management, and implement basic error handling to ensure smooth server operation. By the end of this milestone, your application will be able to handle requests and store data in MongoDB with proper error feedback.

## Tasks

### 1. Backend Folder Structure 🗂
- Create dedicated folders for organizing your backend code. This includes:
  - routes: Handles routing of incoming requests.
  - controllers: Contains the logic for handling requests.
  - models: Defines the structure and schema of your data (MongoDB).
  - middlewares: Used for functions that run during the request-response cycle (e.g., validation, logging).
  - utils: Utility functions that may be used across the backend code.
  
  Note: Terms like “middleware” and “utils” will be explored more in-depth as you progress in the course.

### 2. Server Setup 🖥
- Use Node.js and Express to create the backend server.
- Configure the server to listen on a designated port (e.g., 5000 or 3000).
  
  Steps:
  - Install necessary dependencies like express using npm.
  - Create an Express app and set up a basic route to ensure your server is running.

### 3. Database Connection 💾
- Integrate MongoDB with your application to store and manage data.
  - Use the mongoose library to define schemas and models.
  - Connect the backend server to MongoDB and ensure the connection is successful.
  - Test database connection by saving a test document or retrieving data from a collection.

### 4. Error Handling ⚠
- Implement basic error handling to help with debugging and user feedback.
  - Create a middleware to handle common errors (e.g., 404 for routes that don’t exist, 500 for server issues).
  - Ensure that error messages are clear and helpful for both the developer and the user.

### 5. Documentation 📖
- Update your README file to reflect the progress you've made in this milestone.
  - Provide instructions for setting up and running the backend server.
  - Document key components of the backend, such as how the server is structured, how MongoDB is integrated, and how to handle errors.

## Key Features 🛠

- *Backend Folder Structure*: Organizing your code in a modular and maintainable way will make future development easier.
- *Node.js Server*: Setting up and configuring a server to handle incoming API requests.
- *MongoDB Integration*: Storing and retrieving data from a MongoDB database.
- *Error Handling*: Implementing basic error handling to ensure smooth debugging and user experience.

## Expected Outcome
By the end of this milestone, you will have:
- A well-structured backend with clear folder organization.
- A running Node.js backend server.
- A working MongoDB connection for data storage.
- Implemented basic error handling for better app stability.

## Mentor Guidance
During this milestone, your mentor will guide you through:
- Setting up the backend folder structure and files.
- Configuring the server and connecting to MongoDB.
- Writing and testing error-handling code.

# Milestone 4: User Management with File Uploads

This Node.js application demonstrates user creation, file uploads using Multer, and secure password management using bcrypt and JWT.

## Features

- User Registration: Securely create users with hashed passwords.
- File Upload: Upload user avatars with unique filenames.
- JWT Authentication: Generate and validate JSON Web Tokens.
- Error Handling: Robust error management using a custom ErrorHandler utility.

## Technologies Used

- Node.js with Express.js
- Mongoose for MongoDB
- Multer for file uploads
- bcrypt.js for password hashing
- jsonwebtoken for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running
- .env file with the following variables

# Milestone 5 -Adding SignUp Page

1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

# Milestone 6: User Authentication with Password Encryption

## Overview

In this project, we focus on two key aspects of user authentication:

1. *Encrypting the Password*: Hash the user's password during the signup process using bcrypt to ensure it's stored securely.
2. *Saving User Data*: Store the user's data (e.g., name, email, etc.) in the database, ensuring the password remains encrypted.

## Features

- *Password Encryption*: Uses bcrypt to securely hash and store passwords.
- *Secure User Storage*: Stores user information (name, email, etc.) in the database with encrypted passwords.
- *Database Integration*: Ensures all user data is stored following security best practices.

# Milestone 7:The Login Endpoint

## Overview

This guide covers how to implement a user login endpoint that accepts user credentials (email/username and password), validates the credentials against a database, and uses bcrypt to hash the entered password for secure authentication.

## Features
Accepts login credentials (email/username and password) from the user.
Retrieves user information from the database using the provided credentials.
Uses bcrypt for hashing and comparing passwords securely


# Milestone 8: Product Card Component

## Overview

In Milestone 8, we focus on creating a reusable product card component and designing a homepage to display a collection of these cards. Each card will showcase key product details, such as the product's name, price, and image. The goal is to create a clean and organized layout that improves the user experience and allows for easy browsing of products. This milestone demonstrates the principles of component-based design and how to efficiently manage dynamic content within your app.

## Features

*Reusable Product Card:* A single card component that accepts dynamic product details as props and renders them in a uniform, visually appealing way. The product card includes:

1. Product name
2. Product image
3. Product price

*Dynamic Rendering:* Use of JavaScript array mapping to iterate through a list of products and dynamically render each product's card with its respective data.
*Homepage Layout:* A structured layout, designed using either CSS Grid or Flexbox, to display multiple cards on the homepage in a responsive, organized manner.
*Consistent Design:* The card component ensures that the product details are presented consistently across all cards, providing a seamless user experience

# Milestone 9: Create Product Component

## Overview

In this milestone, we have implemented the Create Product component for the Follow-Along Ecommerce project. This component allows users to create new products by entering details such as name, description, category, tags, price, stock, email, and uploading images.

## Features Implemented

**Form Inputs:** Users can input product details including name, description, category, tags, price, stock, and email.

**Image Upload & Preview:** Users can upload multiple images, which will be displayed as previews before submission.

**Category Selection:** A dropdown to choose a product category.

**Validation & Submission:** Required fields are enforced, and product data is logged on submission.

**Memory Optimization:** Object URLs for image previews are revoked to prevent memory leaks.

## Technologies Used

**React:** Functional components and hooks (useState, useEffect).

**Tailwind CSS:** For styling.

**React Icons:** AiOutlinePlusCircle for the image upload button.

## Milestone 10: Product Management Enhancements


Milestone 10 focuses on refining the product creation and management process. This includes improving the form submission flow, handling errors effectively, and ensuring a seamless user experience.

# Key Features Implemented

Form Submission & Error Handling

Implemented a structured form to capture product details including:

Name

Description

Price

Category

Tags

Stock

Email

Multiple Images

Integrated multiple image selection for better product representation.

Enhanced error handling using try-catch methods to catch and display errors during product creation.

Debugging tools added to log form data before submission for easier troubleshooting.

# API Integration

Built a POST endpoint to receive and validate product data.

Used FormData to handle file uploads efficiently.

Sent form data to the backend API, ensuring proper request formatting (multipart/form-data).

Provided real-time feedback to users on successful product creation or errors encountered.

# Why Validation & Error Handling?

Ensures only valid data is stored in the database.

Helps users identify and correct input mistakes quickly.

Prevents incomplete or invalid submissions, reducing inconsistencies in the system.

# Technologies Used

React.js for frontend UI

Express.js for backend API handling

MongoDB & Mongoose for database storage

Axios for HTTP requests

Postman for API testing

Next Steps & Enhancements

Implement user authentication to restrict product uploads to authorized users.

Develop an admin panel to manage and moderate product listings.

Introduce real-time image preview and editing capabilities.

Optimize database indexing for faster search and retrieval.

Repository & Submission Details

GitHub Repository: [Your Repository Link Here]

Progress Summary: This milestone enhanced the product creation process by improving form submission, adding error handling, and integrating API communication.

Submission: The repository has been updated, and all changes have been pushed successfully.

## Milestone 11: Product Data Integration

# Overview

This milestone demonstrates how to send product data from a backend API to the frontend, retrieve the data, and dynamically display it using reusable product card components. It focuses on improving your understanding of data fetching, API integration, and dynamic UI rendering.

# Features

**API Integration:**

Backend API endpoint that provides all product data in JSON format.

**Frontend Data Fetching:**

A function that retrieves the product data from the backend API.

**Dynamic UI Rendering:**

Product data is dynamically passed to a reusable product card component and displayed in a clean layout.

## Instructions

**Backend:**

Create an API endpoint to fetch product data.
Ensure the endpoint returns a structured JSON response.

**Frontend:**

Write a function to fetch the product data using the API endpoint.
Dynamically map the fetched data to product card components.

**Display:**

Render the product cards in a grid or list format for a user-friendly interface.


## Milestone 12 - My Products Page
# Overview
In this milestone, we will create a "My Products" page that displays all the products added by the currently logged-in user. The data will be filtered based on the user's email and retrieved from MongoDB.

# Learning Goals
Writing an API endpoint to fetch user-specific products from the database.
Filtering data based on user email.
Fetching and displaying the data dynamically on the frontend using the previously created product card component.

# Steps for Milestone 12
**Backend:**

Create an API endpoint that fetches products associated with the logged-in user's email.
Retrieve data from MongoDB and return a JSON response.

**Frontend:**

Write a function to fetch user-specific products from the backend.
Dynamically render the product data using the product card component.

# Expected Outcome
By completing this milestone, users will be able to:

View products that they added, filtered by their email.
Dynamically display the retrieved data using the product card component.
Understand how to filter data in a backend API and send it to the client.


### milestone 13: Product Update Feature (MERN Stack)
This feature enables users to edit product details in a MongoDB database via an edit button on the frontend. When the button is clicked, the existing product details are autofilled in a form, where users can make changes and save them. The backend handles updating the data in MongoDB.

# Overview:
1. Backend: Express.js with MongoDB (Mongoose)
2. Frontend: React.js with Axios for API requests
3. Operation: PUT request to update the product details in the database

### milestone 14: Product Delete Feature (MERN Stack)
This feature allows users to delete a product from a MongoDB database by clicking a delete button on the frontend. When the button is clicked, the product's ID is sent to the backend, which removes it from the database.

# Overview:
1. Backend: Express.js with MongoDB (Mongoose)
2. Frontend: React.js with Axios for API requests
3. Operation: DELETE request to remove a product from the database


### Milestone 15:Responsive Navbar Components

# Overview

This project includes the creation of a responsive navigation bar component (Nav component) that provides smooth navigation across multiple pages within the application. The Nav component will contain links to the following pages:

1. Home

2. My Products

3. Add Product

4. Cart

*The navigation bar will be designed to adapt seamlessly to all screen sizes, ensuring an optimal user experience across devices. The Nav component will be added to all pages, facilitating easy and intuitive navigation throughout the application.*

# Features

1. Responsive navigation bar that adjusts to different screen sizes.

2. Smooth navigation between pages.

3. A user-friendly interface for accessing different sections of the application.


### Milestone 16: Product Info Page
# Overview

This is a React-based e-commerce project built using Vite. The project includes features such as product listing, adding products to the cart, and managing quantities. It utilizes react-router-dom for navigation, axios for data fetching, and dotenv for managing environment variables.

# Features

1. Product listing page displaying all available products.

2. Individual product details page.

3. Add to Cart functionality with quantity selection.

4. Shopping cart page displaying selected products.

5. State management using React Context.

6. Responsive UI for seamless experience across devices.

7. Environment variable support for API integration.



### Milestone 17:
1: Update User Schema to Store Cart Products
We'll modify the user schema to include a cart field that stores product details.

2: Create a Cart Schema
This schema will store cart items with fields like userId, productId, quantity, etc.

3: Write an API Endpoint to Add Products to the Cart
We'll create an API route that accepts product details and stores them in the database.


## Milestone 18:

### **Overview**  
Milestone 18 focuses on implementing a backend API to manage the cart system in an e-commerce application. This includes retrieving products inside a user's cart, ensuring efficient cart management and a seamless shopping experience.  

### **Features**  
- **Fetch Cart Items:** Retrieve all products added to a user's cart.  
- **MongoDB Integration:** Store and manage cart data efficiently.  
- **REST API Support:** Simple and structured API endpoints.  
- **Scalability:** Designed for easy expansion with additional features like cart updates and deletion.  
- **Secure & Optimized:** Ensures reliable data fetching with proper error handling.  


## Milestone 19:
# Overview
In this milestone, we are focusing on creating a Cart Page for our e-commerce application. The page will display products added to the cart, with options for increasing and decreasing the quantity of each product using + and - buttons. Additionally, we will implement backend endpoints to handle updating the quantity of the products in the cart.

### Key Features:
**Frontend Cart Page:** Displays products in the cart.
Each product shows its name, price, and current quantity.
The ability to increase or decrease the quantity of each product using + and - buttons.
**Backend API Endpoints:**
**Increase Quantity:** Endpoint to handle the increase in the product quantity.
**Decrease Quantity:** Endpoint to handle the decrease in the product quantity.



### Milestone 20: User Profile and Email Endpoint Implementation
# Overview
In this milestone, we are focusing on two main tasks:

# Backend Endpoint: Create an API that will send the user’s profile data (including their personal details and address) via email.
**Frontend Profile Page:** Create a profile page that displays the user's data, including profile photo, name, email, and addresses. The page will have sections for user details and addresses, with the ability to add a new address.
# Key Features:
# Backend Email Endpoint:
Endpoint: /api/user/sendData
Sends user data (name, email, profile photo, and address) via email to a specified email address.
**Frontend Profile Page:**
Displays user data: profile photo, name, email, and address.
Includes a button to add an address.
If no address is found, it displays a message: "No address found".


### Milestone 21: Address Form Frontend Page 
# Overview
Create a frontend form to collect and store address details, including country, city, address1, address2, zip code, and address type.
# Steps 
Build the address form page.
Store input values in state.
Navigate to this form when clicking "Add Address" in the profile.


### Milestone 22 - Save Address in User Profile
# Overview
In this milestone, we created a backend endpoint to store user addresses in the database. The endpoint receives address details from the frontend form and appends them to the address array in the user collection.

# Learning Outcomes
1. Implemented an API endpoint to handle address storage.
2. Updated the user collection to include multiple addresses.
3. Strengthened backend skills for handling user profiles.
# Submission Details
1. Code pushed to GitHub repository.
2. Repository is publicly accessible.
3. This README summarizes the progress.
4. This milestone enhances the user experience by providing a profile page to view and manage their information.

### Milestone 23: Implementing Place Order Functionality
# Overview:
In this milestone, we will enhance the checkout flow by implementing a **Place Order** button inside the cart and creating a Select Address page where users can choose a delivery address. Additionally, we will design a Mongoose schema to store order details and create a backend endpoint to fetch user addresses.

# Key Features:
1. Place Order Button inside the cart page.
2. Select Address Page to display and choose a delivery address.
3. Mongoose Schema for storing order details.
4. Backend API to fetch user addresses.

### Milestone 24: Order Confirmation Page

## Overview

The **Order Confirmation Page** is a pivotal component in the e-commerce checkout process. It offers users a final opportunity to review their order details before finalization. This page encompasses the list of products selected for purchase, the chosen delivery address, and the total order value. A prominently displayed "Place Order" button enables users to confirm and complete their purchase.

## Features

1. **Product Summary**: Displays all products in the user's cart, including names, quantities, prices, and any applicable discounts.
2. **Delivery Address**: Shows the user's selected shipping address, with an option to modify if necessary.
3. **Order Total Calculation**: Provides a breakdown of costs, including subtotal, taxes, shipping fees, and the grand total.
4. **Place Order Button**: Allows users to confirm and finalize their order, triggering the order processing workflow.


# Milestone 25 - Order Placement API 

## Steps to Implement

1. **Create an Endpoint:**
   - Develop an endpoint that accepts product details, user information, and address details.

2. **Retrieve User ID:**
   - Extract the user's email from the request data.
   - Use this email to fetch the corresponding _id from the MongoDB users collection.

3. **Store Order Details:**
   - For each product, create a unique order entry with the same address.
   - Use the existing Order schema to store these details in the MongoDB orders collection.


# Milestone 26 📝

### Steps to Fetch User Orders
1. Create an endpoint to receive the **user's email**.
2. Retrieve the *user's _id* using the provided email.
3. Fetch all orders linked to that **_id**.
4. Respond with the user's order details.

This endpoint will help you retrieve all orders for a specific user.

