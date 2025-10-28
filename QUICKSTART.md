# 🚀 Quick Start Guide

## Easy Setup (Windows)

### Method 1: One-Click Start (Recommended)

Simply double-click `start.bat` in your file explorer. This will:

1. Start the backend server
2. Open the frontend in your default browser

### Method 2: Manual Start

1. **Start the Backend Server:**

   - Open Command Prompt or Terminal
   - Navigate to this folder
   - Run: `npm start`
   - Keep this window open

2. **Open the Frontend:**
   - Double-click `phservicestatus.html` in your file explorer
   - Or drag it into your browser

## ✅ Verify It's Working

1. After starting the server, you should see:

   ```
   ✅ PH Service Status API running on http://localhost:3000
   ```

2. Open `phservicestatus.html` in your browser

3. Click the "Refresh" button

4. You should see services updating with their status (UP/DOWN/SLOW)

## 🛑 Stopping the Server

- Press `Ctrl + C` in the terminal where the server is running
- Or close the Command Prompt window

## 🔧 Troubleshooting

### Problem: "Backend server not running" error

**Solution:** Make sure you started the server first with `npm start`

### Problem: Services show "ERROR" status

**Solution:**

1. Check that the server is running on port 3000
2. Visit http://localhost:3000/health in your browser
3. If it shows `{"status":"ok",...}`, the server is working

### Problem: npm command not found

**Solution:** Install Node.js from https://nodejs.org/

### Problem: Port 3000 already in use

**Solution:**

1. Close any other applications using port 3000
2. Or edit `server.js` and change `PORT = 3000` to another port like `3001`

## 📱 Features

- ✅ Real-time service status checking
- 🎯 10+ popular PH services monitored
- ⚡ Response time measurement
- 🔄 Manual refresh
- 🎨 Clean, responsive UI

## 🔗 Useful Links

- Backend API: http://localhost:3000
- Health Check: http://localhost:3000/health
- API Docs: See README.md

---

**Need help?** Check the full README.md for detailed documentation.
