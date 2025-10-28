@echo off
echo ============================================
echo  PH Service Status Checker
echo ============================================
echo.
echo [1/2] Starting backend server...
start "PH Status Server" cmd /k "npm start"
timeout /t 3 /nobreak > nul
echo.
echo [2/2] Opening web application...
timeout /t 1 /nobreak > nul
start "" "http://localhost:3000"
echo.
echo ============================================
echo  Application Started Successfully!
echo ============================================
echo.
echo Backend server: http://localhost:3000
echo Web app opened in your browser
echo.
echo Press any key to exit this window...
echo (Server will continue running in background)
pause > nul
