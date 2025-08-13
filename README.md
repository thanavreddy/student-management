# Student Management App

This project is a full-stack student management system built with Node.js (Express) for the backend and React (Vite) for the frontend.

## Prerequisites
- Node.js (v18 or higher recommended)
- npm
- MongoDB running locally (default: `mongodb://localhost:27017`)

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/thanavreddy/student-management
cd student-management
```

### 2. Start the Backend
```
cd backend
npm install
nodemon server.js
```
- The backend server will start on `http://localhost:3001` (or the port specified in `.env`).

### 3. Start the Frontend
```
cd frontend
npm install
npm run dev
```
- The frontend will start on `http://localhost:5173` by default.

## Troubleshooting
- If you see errors about missing modules (e.g., `body-parser`), run:
  ```
  del package-lock.json
  rmdir /s /q node_modules
  npm install
  ```
  Then restart the server.
- Ensure MongoDB is running locally before starting the backend.

## Project Structure
```
backend/      # Express server and API
frontend/     # React app (Vite)
```

## Useful Commands
- Restart backend with nodemon: `rs` in the terminal
- Stop servers: `Ctrl + C`


