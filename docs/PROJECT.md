# 📚 Project Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [Features](#features)
5. [API Documentation](#api-documentation)
6. [Development](#development)
7. [Deployment](#deployment)

## Overview

PH Service Status Checker is a full-stack web application that monitors the availability of popular Philippine online services. It provides real-time status updates, custom URL checking, and a beautiful modern interface.

## Architecture

### Tech Stack

**Frontend:**

- HTML5
- CSS3 (Tailwind CSS via CDN)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

**Backend:**

- Node.js
- Express.js (Web framework)
- Axios (HTTP client)
- CORS middleware

### Application Flow

```
User Browser
    ↓
Frontend (index.html)
    ↓
Backend API (server.js)
    ↓
External Services
    ↓
Backend API
    ↓
Frontend Display
```

## File Structure

```
is-it-down/
│
├── public/                      # Frontend assets
│   ├── index.html              # Main application (890+ lines)
│   ├── css/                    # (Future: External stylesheets)
│   └── js/                     # (Future: External scripts)
│
├── docs/                       # Documentation
│   ├── README.md              # Detailed documentation
│   ├── QUICKSTART.md          # Quick start guide
│   └── PROJECT.md             # This file
│
├── node_modules/              # Dependencies (gitignored)
│
├── server.js                  # Backend API server (155 lines)
├── package.json               # Project configuration
├── package-lock.json          # Dependency lock file
├── start.bat                  # Windows launcher script
├── .gitignore                # Git ignore rules
└── README.md                  # Main documentation

```

## Features

### 1. Service Status Monitoring

**Philippine Services:**

- E-Wallets: GCash, Maya
- Banks: BPI, BDO, UnionBank
- E-Commerce: Shopee PH, Lazada PH
- ISPs: PLDT, Globe, Converge

**Status Types:**

- ✅ **UP** - Service responding normally (< 2.5s)
- ⚠️ **SLOW** - Service responding slowly (> 2.5s)
- ❌ **DOWN** - Service not responding
- ⚠️ **ERROR** - Connection or server error

### 2. Custom URL Checker

- Input any website URL
- Automatic URL normalization (adds https:// if missing)
- Instant status check
- Display response time
- Visual feedback with status badges

### 3. Live Statistics

Real-time counters showing:

- Number of services UP
- Number of services SLOW
- Number of services DOWN
- Number of services being checked

### 4. Auto-Refresh

- Toggle automatic checking every 60 seconds
- Smart pause when browser tab is hidden
- Auto-resume when tab becomes visible
- Visual indicator (green when ON)

### 5. User Interface

**Design Elements:**

- Animated gradient background (purple to blue)
- Glass morphism effects
- Service cards with category icons
- Smooth animations and transitions
- Responsive layout (mobile & desktop)
- Toast notifications
- Loading spinners

**Interactions:**

- Hover effects on cards
- Button animations
- Keyboard shortcuts
- Form validation
- Real-time updates

### 6. Keyboard Shortcuts

- **R** - Refresh all services
- **A** - Toggle auto-refresh
- **Enter** - Check custom URL (when input focused)

## API Documentation

### Base URL

```
http://localhost:3000
```

### Endpoints

#### 1. Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2025-10-28T12:00:00.000Z"
}
```

#### 2. Get All Services

```http
GET /api/services
```

**Response:**

```json
[
  {
    "id": "gcash",
    "name": "GCash",
    "url": "https://www.gcash.com/"
  },
  ...
]
```

#### 3. Check Single Service

```http
GET /api/check/:serviceId
```

**Parameters:**

- `serviceId` (string) - Service identifier (e.g., "gcash")

**Response:**

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

#### 4. Check Custom URL

```http
POST /api/check-custom
```

**Request Body:**

```json
{
  "url": "https://example.com"
}
```

**Response:**

```json
{
  "service": {
    "id": "custom",
    "name": "https://example.com",
    "url": "https://example.com"
  },
  "status": "UP",
  "duration": 456,
  "statusCode": 200
}
```

#### 5. Check All Services

```http
GET /api/check-all
```

**Response:**

```json
[
  {
    "service": {...},
    "status": "UP",
    "duration": 1234,
    "statusCode": 200
  },
  ...
]
```

### Status Codes

- `200` - Success
- `400` - Bad Request (invalid URL)
- `404` - Service Not Found
- `500` - Server Error

## Development

### Prerequisites

```bash
node --version  # v14.0.0 or higher
npm --version   # 6.0.0 or higher
```

### Setup Development Environment

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev  # With auto-reload (requires nodemon)
   # or
   npm start    # Standard mode
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Development Workflow

1. Edit `server.js` for backend changes
2. Edit `public/index.html` for frontend changes
3. Server auto-reloads (if using nodemon)
4. Refresh browser to see changes

### Adding New Services

1. **Update server.js:**

   ```javascript
   const SERVICES = [
     // ... existing services
     {
       id: "newservice",
       name: "New Service",
       url: "https://newservice.com/",
     },
   ];
   ```

2. **Update public/index.html:**

   ```javascript
   const SERVICES = [
     // ... existing services
     {
       id: "newservice",
       name: "New Service",
       url: "https://newservice.com/",
       icon: "🆕",
       category: "Category",
     },
   ];
   ```

3. **Restart server**

### Testing

Manual testing checklist:

- [ ] All services load correctly
- [ ] Status checks work for each service
- [ ] Custom URL checker works
- [ ] Auto-refresh toggles correctly
- [ ] Keyboard shortcuts work
- [ ] Mobile responsive layout
- [ ] Toast notifications appear
- [ ] Statistics update correctly

### Debugging

**Enable console logging:**

```javascript
// In public/index.html
console.log("Debug info:", data);

// In server.js
console.log("Server log:", message);
```

**Check server logs:**

```bash
# View terminal output
# Errors will be displayed in red
```

## Deployment

### Local Deployment

Already configured! Just run:

```bash
npm start
```

### Production Deployment

#### Option 1: Traditional Server (VPS/Cloud)

1. **Install Node.js on server**
2. **Clone repository**
3. **Install dependencies:**
   ```bash
   npm install --production
   ```
4. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name ph-status
   pm2 save
   pm2 startup
   ```
5. **Configure reverse proxy (Nginx):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

#### Option 2: Heroku

1. **Create `Procfile`:**

   ```
   web: node server.js
   ```

2. **Update port in server.js:**

   ```javascript
   const PORT = process.env.PORT || 3000;
   ```

3. **Deploy:**
   ```bash
   heroku create ph-service-status
   git push heroku main
   ```

#### Option 3: Vercel/Netlify

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

3. **Follow prompts**

### Environment Variables

For production, consider using environment variables:

```javascript
// server.js
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
```

### Security Considerations

1. **Rate Limiting:**

   ```javascript
   const rateLimit = require("express-rate-limit");

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // limit each IP to 100 requests per windowMs
   });

   app.use("/api/", limiter);
   ```

2. **Helmet for Security Headers:**

   ```bash
   npm install helmet
   ```

   ```javascript
   const helmet = require("helmet");
   app.use(helmet());
   ```

3. **HTTPS in Production:**
   - Use Let's Encrypt for free SSL
   - Configure Nginx/Apache for HTTPS

## Performance Optimization

### Backend

- Connection pooling for axios
- Caching results (Redis)
- Rate limiting
- Compression middleware

### Frontend

- Lazy loading
- Service worker for offline support
- Bundle and minify assets
- CDN for static assets

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Audit for vulnerabilities
npm audit
npm audit fix
```

### Monitoring

Consider adding:

- Error logging (Winston, Morgan)
- Uptime monitoring (UptimeRobot)
- Performance monitoring (New Relic)
- Analytics (optional)

## Future Enhancements

- [ ] Historical data and charts
- [ ] Email/SMS notifications
- [ ] User accounts and saved services
- [ ] Dark mode toggle
- [ ] PWA support
- [ ] API authentication
- [ ] Docker containerization
- [ ] Database integration
- [ ] Multi-language support
- [ ] Service categories filtering

---

**Last Updated:** October 28, 2025
