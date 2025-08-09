# Weather Station - Simple Version (Works with Node.js v14)

Since you have Node.js v14, I've created a simplified version that doesn't require Angular CLI or newer Node.js versions.

## Quick Start

### Option 1: Run Everything Automatically (Recommended)

**Using Batch file (Windows CMD):**
```cmd
.\run-simple.bat
```

**Using PowerShell:**
```powershell
.\run-simple.ps1
```

This will:
1. Start the backend API on port 5240
2. Start the frontend on port 3000
3. Open your browser automatically

### Option 2: Run Manually

**Terminal 1 - Backend:**
```bash
cd ..\backend-node
npm install
node server.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend-angular
node simple-server.js
```

Then open http://localhost:3000 in your browser.

## Files Created

- `index-simple.html` - The weather app interface (Angular-style but vanilla JS)
- `simple-server.js` - Basic HTTP server to serve the HTML
- `run-simple.bat` - Windows batch script to run everything
- `run-simple.ps1` - PowerShell script to run everything

## Features

✅ Works with Node.js v14  
✅ Same UI as Angular version  
✅ Loading states and error handling  
✅ Hover effects and transitions  
✅ Responsive design  
✅ No build process needed  

## To Stop

Close the command windows that are running the servers.
