# PH Service Status Checker

Monitor the availability of popular Philippine online services in real-time.

## 🚀 Features

- ✅ Real-time status checking for 10+ popular PH services
- 🎨 Clean, modern UI with Tailwind CSS
- ⚡ Backend API for accurate status checks (no CORS issues)
- 📊 Response time monitoring
- 🔄 Manual refresh capability

## 📋 Services Monitored

- **E-Wallets:** GCash, Maya
- **Banks:** BPI, BDO, UnionBank
- **E-Commerce:** Shopee PH, Lazada PH
- **ISPs:** PLDT, Globe, Converge

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the backend server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

3. **Open the frontend:**
   - Open `phservicestatus.html` in your web browser
   - Or use a simple HTTP server:

     ```bash
     # Using Python 3
     python -m http.server 8080

     # Using Node.js http-server (install with: npm install -g http-server)
     http-server -p 8080
     ```

   - Then visit `http://localhost:8080/phservicestatus.html`

## 📡 API Endpoints

The backend server provides the following endpoints:

- `GET /health` - Health check
- `GET /api/services` - List all monitored services
- `GET /api/check/:serviceId` - Check status of a specific service
- `GET /api/check-all` - Check status of all services at once

### Example API Response

```json
{
  "service": {
    "id": "gcash",
    "name": "GCash",
    "url": "https://www.gcash.com/"
  },
  "status": "UP",
  "duration": 1234,
  "statusCode": 200
}
```

Status values:

- `UP` - Service is responding normally (< 2.5 seconds)
- `SLOW` - Service is responding slowly (> 2.5 seconds)
- `DOWN` - Service is not responding or returned an error

## 🔧 Development

For development with auto-reload:

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when you make changes.

## 📝 Adding New Services

To add a new service, edit the `SERVICES` array in both files:

1. **server.js** (lines 10-21)
2. **phservicestatus.html** (lines 84-95)

Example:

```javascript
{
  id: "example",
  name: "Example Service",
  url: "https://example.com/"
}
```

## 🚨 Troubleshooting

### Frontend shows "ERROR" status

- Make sure the backend server is running on `http://localhost:3000`
- Check the browser console for error messages
- Verify the server is accessible by visiting `http://localhost:3000/health`

### Services show as "DOWN" but they're actually up

- Some sites may block automated requests
- The service might have rate limiting
- Try increasing the timeout in `server.js` (currently 8000ms)

## 📄 License

MIT

## 🤝 Contributing

Feel free to add more services or improve the functionality!
