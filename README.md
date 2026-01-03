# 📈 ShareTrack – Trading & Portfolio Management App

A production-ready React Native trading dashboard application built with Expo and Clerk Authentication, providing secure user authentication, portfolio tracking, market insights, and a modern dark-themed trading experience.

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---

## ✨ Features

### 🔐 Authentication
- Real user authentication using Clerk
- Email & Password Sign In / Sign Up
- Secure session handling
- Logout with session termination
- Protected routes for authenticated users only

### 📊 Trading Dashboard
- Portfolio value overview
- Daily Profit & Loss (P&L)
- Today’s gain percentage
- Clean market performance cards
- Visual indicators for profit and loss

### 📈 Watchlist
- Track popular stocks (AAPL, TSLA, GOOGL, MSFT)
- Live-style price updates
- Green indicators for gains
- Red indicators for losses

### 👤 Profile & Account
- View trader name and username
- Unique Trader ID
- Registered email
- Account status (Active Trader)
- Secure logout from profile screen

### 🎨 User Experience
- Modern dark-themed trading UI
- Card-based dashboard layout
- Responsive mobile design
- Smooth navigation with Expo Router

---

## 🧱 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React Native | Cross-platform mobile development |
| Expo | Development and build toolchain |
| Expo Router | File-based navigation |
| Clerk | Authentication and session management |
| TypeScript | Type safety and scalability |

---

## 📱 App Screens

- Sign In – Trading email & password login
- Sign Up – Create trading account
- Dashboard – Portfolio value, daily P&L, gains
- Watchlist – Stock prices and movements
- Profile – Trader details and account status
- Security – Secure session and logout

---

## 🗂️ Project Structure

ShareTrack/
├── app/
│ ├── (auth)/
│ │ ├── sign-in.tsx
│ │ └── sign-up.tsx
│ ├── (home)/
│ │ ├── index.tsx
│ │ ├── watchlist.tsx
│ │ └── profile.tsx
│ ├── _layout.tsx
│ └── styles.ts
├── components/
│ ├── SignOutButton.tsx
│ └── themed-components.tsx
├── assets/
├── hooks/
├── constants/
├── .env
└── README.md

yaml
Copy code

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ShareTrack.git
cd ShareTrack
2️⃣ Install Dependencies
bash
Copy code
npm install --legacy-peer-deps
3️⃣ Environment Setup
Create a .env file in the root directory:

env
Copy code
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
Get your key from:

https://dashboard.clerk.com → API Keys → Publishable Key

4️⃣ Run the App
bash
Copy code
npx expo start
Platform	Action
Expo Go	Scan QR code
Web	Press w
Android Emulator	Press a
iOS Simulator	Press i

🔐 Authentication Flow
mermaid
Copy code
graph TD
A[Launch App] --> B{Authenticated?}
B -->|No| C[Sign In / Sign Up]
C --> D[Clerk Authentication]
D --> E[Dashboard]
B -->|Yes| E
E --> F[Profile]
F --> G[Logout]
G --> C
📋 Functional Flow
Unauthenticated Users
Access Sign In and Sign Up screens only

Authenticated Users
Access dashboard, watchlist, and profile

Secure logout available anytime

🎯 Highlights
Feature	Status
Real Authentication	✅
Secure Sessions	✅
Trading Dashboard	✅
Watchlist	✅
Profile & Trader ID	✅
Dark Mode UI	✅
Production Ready	✅

🧪 Developer Commands
bash
Copy code
npx expo start --clear
npx expo reset-project
npx tsc --noEmit
📄 License
This project is built for learning and academic demonstration purposes.
All authentication data is securely managed by Clerk.

🙏 Acknowledgments
Clerk for secure authentication

Expo for seamless development

React Native community

Modern trading apps for UI inspiration
