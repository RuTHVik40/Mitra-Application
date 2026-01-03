# 📈 ShareTrack – Trading & Portfolio Management App

A production-ready React Native trading dashboard application built with Expo and Clerk Authentication, providing secure user authentication, portfolio tracking, market insights, and a modern dark-themed trading experience.

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---
## ✅ Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v18 or above recommended)
- **npm**
- **Expo Go app** (Android or iOS)
- A **Clerk account** for authentication keys

---

## 📥 Clone the Repository

```bash
git clone https://github.com/RuTHVik40/ShareTrack.git
cd ShareTrack
```

## 📦 Install Dependencies
```bash
npm install --legacy-peer-deps
```

## 🔐 Environment Configuration

Create a .env file in the root directory of the project and add:
```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```
## Get Clerk Publishable Key

1. Go to https://dashboard.clerk.com
2. Select your application
3. Navigate to API Keys
4. Copy the Publishable Key

## ▶️ Run the Application

Start the Expo development server:
```bash
npx expo start
```

## 🗂️ Project Structure
```bash
ShareTrack/
├── app/
│ ├── (auth)/
│ │ ├── _layout.tsx
│ │ ├── sign-in.tsx
│ │ └── sign-up.tsx
│ ├── (home)/
│ │ ├── _layout.tsx
│ │ ├── index.tsx
│ │ └── profile.tsx
│ ├── _layout.tsx
│ └── styles.ts
├── components/
├── assets/
├── hooks/
├── constants/
├── .env
└── README.md
```

## ✨ Features

- 🔐 Secure authentication using Clerk (Email / Social Login)
- 📊 Portfolio overview with profit & loss insights
- 📈 Market watchlist with real-time styled UI
- 🌙 Modern dark-themed trading dashboard
- 👤 User profile management
- 📱 Fully responsive mobile-first design

## 📸 Application Screenshots

### 🔐 Authentication Screens

**Sign In Page**  
![Sign In](assets/screens/signin.png)

**Sign Up Page**  
![Sign Up](assets/screens/signup.png)

---

### 📊 Dashboard Screens

**Dashboard – Overview**  
![Dashboard 1](assets/screens/dashboard-1.png)

**Dashboard – Market Insights**  
![Dashboard 2](assets/screens/dashboard-2.png)

---

### 👤 Profile Screens

**Profile – User Details**  
![Profile 1](assets/screens/profile-1.png)

**Profile – Settings & Preferences**  
![Profile 2](assets/screens/profile-2.png)
