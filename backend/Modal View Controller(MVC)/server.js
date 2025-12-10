/*
MVC Module
=================

This module implements the Model-View-Controller (MVC) design pattern to separate concerns in application development. It provides a structured way to manage data (Model), user interface (View), and application logic (Controller).

Components:
1. Model: Manages the data and business logic.
2. View: Handles the display of information to the user.
3. Controller: Acts as an intermediary between Model and View, processing user input and updating the Model and View accordingly.

Usage:
- Import the MVC module into your application.
- Define your Models, Views, and Controllers as per your application's requirements.
- Use the Controller to handle user interactions and update the Model and View.

This modular approach enhances maintainability, scalability, and testability of the application..

Backend/
 - modal/
 - controller/
 - routes/
 - server.js
 - package.json
*/
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use student routes
app.use('/', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});