# Habit Tracker API

## Overview

The Habit Tracker API is a Node.js application that allows users to manage their habits effectively. Users can create, update, delete, and track their habits, receive reminders for pending tasks, and admins can view user stats and create habit templates.

## Features

- **User Authentication**: Secure JWT-based login and registration.
- **Habit Management**: CRUD operations for habits with features to track daily progress, streaks, and frequency settings.
- **Notifications**: Daily email reminders for pending habits.
- **Admin Controls**: Admin users can view all users and their habit completion stats, as well as create habit templates.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js (for password hashing)
- node-cron (for scheduling tasks)
- nodemailer (for sending email notifications)
- dotenv (for environment variables)

## Installation

### Prerequisites

- Node.js
- MongoDB 


### Install dependencies:
npm install

### Run the application:
npm start