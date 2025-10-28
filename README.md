# 🇵🇭 PH Service Status Checker# PH Service Status Checker

A beautiful, modern web application to monitor the availability of popular Philippine online services in real-time.Monitor the availability of popular Philippine online services in real-time.

![Version](https://img.shields.io/badge/version-1.0.0-blue)## 🚀 Features

![License](https://img.shields.io/badge/license-MIT-green)

![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)- ✅ Real-time status checking for 10+ popular PH services

- 🎨 Clean, modern UI with Tailwind CSS

## ✨ Features- ⚡ Backend API for accurate status checks (no CORS issues)

- 📊 Response time monitoring

- 🎨 **Beautiful Modern UI** - Gradient background with glass morphism effects- 🔄 Manual refresh capability

- 📊 **Live Statistics Dashboard** - Real-time counters for service status

- 🔍 **Custom URL Checker** - Check any website's status instantly## 📋 Services Monitored

- 🔄 **Auto-Refresh** - Automatic checking every 60 seconds (toggle on/off)

- ⌨️ **Keyboard Shortcuts** - Quick access with hotkeys (R to refresh, A to toggle auto-refresh)- **E-Wallets:** GCash, Maya

- 🔔 **Toast Notifications** - Success messages after checks complete- **Banks:** BPI, BDO, UnionBank

- 📱 **Fully Responsive** - Works beautifully on mobile and desktop- **E-Commerce:** Shopee PH, Lazada PH

- 🚀 **Fast & Reliable** - Backend API for accurate status checks- **ISPs:** PLDT, Globe, Converge

## 📋 Monitored Services## 🛠️ Setup Instructions

### E-Wallets 💳### Prerequisites

- GCash

- Maya- Node.js (v14 or higher)

- npm or yarn

### Banks 🏦

- BPI### Installation

- BDO

- UnionBank1. **Install dependencies:**

### E-Commerce 🛒 ```bash

- Shopee PH npm install

- Lazada PH ```

### ISPs 📡2. **Start the backend server:**

- PLDT

- Globe ```bash

- Converge npm start

  ```

  ```

## 🚀 Quick Start

The server will run on `http://localhost:3000`

### Prerequisites

3. **Open the frontend:**

- Node.js (v14 or higher) - Open `phservicestatus.html` in your web browser

- npm or yarn - Or use a simple HTTP server:

### Installation ```bash

     # Using Python 3

1. **Clone or download this repository** python -m http.server 8080

2. **Install dependencies:** # Using Node.js http-server (install with: npm install -g http-server)

   ````bash http-server -p 8080

   npm install     ```

   ````

   - Then visit `http://localhost:8080/phservicestatus.html`

3. **Start the server:**

   ````bash## 📡 API Endpoints

   npm start

   ```The backend server provides the following endpoints:



   The server will run on `http://localhost:3000`- `GET /health` - Health check
   ````

- `GET /api/services` - List all monitored services

4. **Open in browser:**- `GET /api/check/:serviceId` - Check status of a specific service

   - Visit `http://localhost:3000` in your web browser- `GET /api/check-all` - Check status of all services at once

   - That's it! The app will load automatically.

### Example API Response

### Windows Users

````json

Simply double-click `start.bat` to launch everything automatically!{

  "service": {

## 📁 Project Structure    "id": "gcash",

    "name": "GCash",

```    "url": "https://www.gcash.com/"

is-it-down/  },

├── public/               # Frontend files  "status": "UP",

│   └── index.html       # Main HTML file  "duration": 1234,

├── docs/                # Documentation  "statusCode": 200

│   ├── README.md       # Full documentation}

│   └── QUICKSTART.md   # Quick start guide```

├── server.js           # Backend API server

├── package.json        # DependenciesStatus values:

├── start.bat          # Windows launcher

└── .gitignore         # Git ignore rules- `UP` - Service is responding normally (< 2.5 seconds)

```- `SLOW` - Service is responding slowly (> 2.5 seconds)

- `DOWN` - Service is not responding or returned an error

## 🎯 Usage

## 🔧 Development

### Check Philippine Services

For development with auto-reload:

1. Open the app in your browser

2. Click "Refresh" or press **R** to check all services```bash

3. View real-time status updates with response timesnpm run dev

````

### Check Custom URL

This uses `nodemon` to automatically restart the server when you make changes.

1. Type any website URL in the "Check Any Website" field

2. Click "Check Status" or press **Enter**## 📝 Adding New Services

3. View the result instantly

To add a new service, edit the `SERVICES` array in both files:

### Auto-Refresh

1. **server.js** (lines 10-21)

1. Click "Auto-refresh OFF" button or press **A**2. **phservicestatus.html** (lines 84-95)

1. Services will be checked automatically every 60 seconds

1. Press **A** again to turn offExample:

### Keyboard Shortcuts```javascript

{

- **R** - Refresh all services id: "example",

- **A** - Toggle auto-refresh name: "Example Service",

- **Enter** - Check custom URL (when input is focused) url: "https://example.com/"

}

## 🔧 API Endpoints```

The backend server provides these endpoints:## 🚨 Troubleshooting

- `GET /` - Serve the web application### Frontend shows "ERROR" status

- `GET /health` - Health check

- `GET /api/services` - List all monitored services- Make sure the backend server is running on `http://localhost:3000`

- `GET /api/check/:serviceId` - Check specific service- Check the browser console for error messages

- `POST /api/check-custom` - Check custom URL- Verify the server is accessible by visiting `http://localhost:3000/health`

- `GET /api/check-all` - Check all services at once

### Services show as "DOWN" but they're actually up

### Example: Check Custom URL

- Some sites may block automated requests

```bash- The service might have rate limiting

curl -X POST http://localhost:3000/api/check-custom \- Try increasing the timeout in `server.js` (currently 8000ms)

  -H "Content-Type: application/json" \

  -d '{"url": "https://google.com"}'## 📄 License

```

MIT

Response:

```json## 🤝 Contributing

{

  "service": {Feel free to add more services or improve the functionality!

    "id": "custom",
    "name": "https://google.com",
    "url": "https://google.com"
  },
  "status": "UP",
  "duration": 234,
  "statusCode": 200
}
```

## 🛡️ Security

- ✅ No data collection or tracking
- ✅ No external analytics
- ✅ Only uses trusted CDNs (Tailwind CSS, Google Fonts)
- ✅ 100% open source and transparent
- ✅ All network calls are visible in the code

## 🎨 Customization

### Add More Services

Edit `server.js` and add to the `SERVICES` array:

```javascript
const SERVICES = [
  // ... existing services
  {
    id: "yourservice",
    name: "Your Service",
    url: "https://yourservice.com/",
  },
];
```

Then update the frontend `public/index.html` to match.

### Change Port

Edit `server.js`:

```javascript
const PORT = 3000; // Change to your desired port
```

### Customize Styling

The app uses Tailwind CSS. Edit `public/index.html` to modify colors, layouts, and styles.

## 🐛 Troubleshooting

### "Backend server not running" error

- Make sure you ran `npm start`
- Check that port 3000 is not in use
- Visit `http://localhost:3000/health` to verify

### Port 3000 already in use

1. Stop the existing process
2. Or change the port in `server.js`

### Services show as DOWN but they're actually up

- Some sites may block automated requests
- Try increasing timeout in `server.js` (currently 8000ms)

## 📝 License

MIT License - feel free to use this project for any purpose!

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add more Philippine services
- Improve the UI/UX
- Fix bugs
- Add new features

## 👨‍💻 Author

Built with ❤️ for the Philippines

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Need help?** Check the [Quick Start Guide](docs/QUICKSTART.md) or open an issue.
