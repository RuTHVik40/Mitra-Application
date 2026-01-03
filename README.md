📈 ShareTrack – Trading & Portfolio Management App

A production-ready React Native trading dashboard application built with Expo and Clerk Authentication, providing secure user authentication, portfolio tracking, market insights, and a modern dark-themed trading experience.

<p align="center"> <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" /> <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> </p>
✨ Features
🔐 Authentication

Real user authentication using Clerk

Email & Password Sign In / Sign Up

Secure session handling

Logout with session termination

Protected routes for authenticated users only

📊 Trading Dashboard

Portfolio value overview

Daily Profit & Loss (P&L)

Today's gain percentage

Live-style market cards

Clean visual indicators for profit & loss

📈 Watchlist

Add and view popular stocks:

AAPL

TSLA

GOOGL

MSFT

Color-coded price movements:

🟢 Green → Profit

🔴 Red → Loss

👤 Profile & Account

View:

Full name

Username

Email address

Unique Trader ID

Account status (Active Trader)

Secure session status

Sign out safely from profile screen

🎨 User Experience

Modern dark trading UI

Smooth card-based layout

Minimal & professional design

Responsive for mobile screens

Intuitive navigation flow

🧱 Tech Stack
Technology	Purpose
React Native	Cross-platform mobile app
Expo	Development & build toolchain
Expo Router	File-based navigation
Clerk	Authentication & user sessions
TypeScript	Type safety & scalability
📱 App Screens
<div align="center">
Sign In	Sign Up
Trading login with email & password	Create trading account
<br/>
Dashboard	Watchlist
Portfolio overview & P&L	Tracked stocks with live-style prices
<br/>
Profile	Security
Trader details & status	Secure session & logout
</div>
🗂️ Project Structure
ShareTrack/
├── app/
│   ├── (auth)/
│   │   ├── sign-in.tsx        # Trading login screen
│   │   └── sign-up.tsx        # Create trading account
│   ├── (home)/
│   │   ├── index.tsx          # Trading dashboard
│   │   ├── watchlist.tsx      # Stock watchlist
│   │   └── profile.tsx        # User profile
│   ├── _layout.tsx            # Root layout with Clerk Provider
│   └── styles.ts              # Shared styles
├── components/
│   ├── SignOutButton.tsx      # Secure logout
│   └── themed-*.tsx           # Themed UI components
├── assets/                    # Icons, images
├── hooks/                     # Custom hooks
├── constants/                 # App constants
├── .env                       # Environment variables
└── README.md

🚀 Quick Start
1️⃣ Clone the Repository
git clone https://github.com/RuTHVik40/ShareTrack.git
cd ShareTrack

2️⃣ Install Dependencies

⚠️ Important:
Due to Expo + Clerk peer dependency conflicts, install using:

npm install --legacy-peer-deps

3️⃣ Environment Setup

Create a .env file in the root directory:

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key


📌 Get your key from:

https://dashboard.clerk.com

Go to API Keys

Copy Publishable Key

4️⃣ Run the App
npx expo start

Run on:
Platform	Action
📱 Expo Go	Scan QR code
🌐 Web	Press w
🤖 Android	Press a
🍎 iOS	Press i
🔐 Authentication Flow


🎯 Key Highlights
Feature	Status
Real Authentication	✅
Secure Sessions	✅
Trading Dashboard	✅
Watchlist	✅
Profile & Trader ID	✅
Dark Mode UI	✅
Production-ready	✅

🧪 Debug & Dev Commands
# Clear cache
npx expo start --clear

# Reset project
npx expo reset-project

# Type check
npx tsc --noEmit


🙏 Acknowledgments

Clerk – Secure authentication

Expo – Smooth developer experience

React Native community

Modern trading apps for UI inspiration