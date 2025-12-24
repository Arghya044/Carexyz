# CareXYZ - Trusted Care Service Platform

CareXYZ is a comprehensive web application designed to connect users with professional care services. Whether you need babysitting, elderly care, or specialized medical support, CareXYZ provides a seamless booking experience with trusted professionals.

## 🚀 Live Link

**https://carexyz-arghya.vercel.app**  


## 📋 Project Overview

This platform facilitates the booking of various care services. Key features include:
- **User Authentication**: Secure login and registration using Firebase and custom authentication flows.
- **Service Booking**: Users can browse available services (Babysitting, Elderly Care, etc.) and book them.
- **Admin Dashboard**: A dedicated admin panel to manage bookings, services, and users.
- **Email Notifications**: Automated email confirmations using Nodemailer.
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface.

## 🛠️ Technologies Used

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form

### Backend & Database
- **Database**: [MongoDB](https://www.mongodb.com/) (Data persistence)
- **Authentication**: [Firebase Auth](https://firebase.google.com/) & Firebase Admin SDK
- **Email Service**: [Nodemailer](https://nodemailer.com/)

## 🔑 Admin Credentials

To access the Admin Dashboard, use the following default credentials (for development/testing purposes):

- **Login URL**: `/login` (or directly via API initialization)
- **Email**: `__admin@gmail.com__`
- **Password**: `admin123`

> **Note**: These credentials should be changed in a production environment. You can initialize the admin account by visiting the application or triggering the admin init API if not already created.

## ⚙️ Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd carexyz
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add the following configuration keys (refer to `.env.example` if available, or use your own credentials):

    ```env
    # Firebase Configuration
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    # ... other firebase config

    # MongoDB Configuration
    MONGODB_URI=your_mongodb_connection_string
    MONGODB_DB_NAME=carexyz

    # Nodemailer Configuration
    EMAIL_USER=your_email@gmail.com
    EMAIL_APP_PASSWORD=your_app_password

    # Admin Setup
    DEFAULT_ADMIN_EMAIL=__admin@gmail.com__
    DEFAULT_ADMIN_PASSWORD=admin123
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is for educational/portfolio purposes.
