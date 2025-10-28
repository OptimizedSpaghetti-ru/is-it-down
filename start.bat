@echo off
echo Starting PH Service Status Checker...
echo.
echo [1/2] Starting backend server...
start "Backend Server" cmd /k "node server.js"
timeout /t 2 /nobreak > nul
echo.
echo [2/2] Opening frontend...
start "" "phservicestatus.html"
echo.
echo ✅ Application started!
echo.
echo Backend server: http://localhost:3000
echo Frontend: Check your browser
echo.
echo Press any key to exit...
pause > nul
