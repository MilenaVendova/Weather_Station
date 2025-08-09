# 🌦️ Weather Station Application

A full-stack weather application built with Angular and .NET Core/Node.js, designed for educational purposes with extensive Bulgarian comments.

## 🚀 Features

- Real-time weather display for different countries
- Clean, responsive UI with Angular 17
- RESTful API backend (choice of .NET Core or Node.js)
- 24-hour weather forecast
- Loading states and error handling
- Hover effects and smooth transitions

## 🛠️ Technology Stack

### Frontend
- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **CSS3** - Styling with animations

### Backend Options
1. **.NET Core 8.0** - C# Minimal API
2. **Node.js/Express** - JavaScript REST API

## 📋 Prerequisites

- Node.js v18.13+ (for Angular)
- npm v8.19+
- .NET SDK 8.0 (for .NET backend) OR Node.js (for Node backend)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Weather_Station.git
cd Weather_Station
```

2. Install Angular dependencies:
```bash
cd frontend-angular
npm install
```

3. Install backend dependencies:

For Node.js backend:
```bash
cd ../backend-node
npm install
```

For .NET backend:
```bash
cd ../backend/WeatherApi
dotnet restore
```

## 🏃 Running the Application

### Start the Backend

**Node.js:**
```bash
cd backend-node
npm start
```

**.NET Core:**
```bash
cd backend/WeatherApi
dotnet run
```

### Start the Frontend

In a new terminal:
```bash
cd frontend-angular
npm start
```

Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Weather_Station/
├── backend/              # .NET Core API
├── backend-node/         # Node.js API (alternative)
├── frontend/             # Original vanilla JS version
├── frontend-angular/     # Angular 17 version
│   ├── src/
│   │   ├── app/         # Components & services
│   │   └── assets/      # Static files
│   └── [config files]
└── README.md
```

## 🎓 Educational Purpose

This project includes extensive Bulgarian comments explaining every line of code, making it perfect for:
- Learning Angular fundamentals
- Understanding client-server architecture
- Practicing TypeScript
- Exploring modern web development

## 📚 Documentation

- [Detailed explanation for kids (Bulgarian)](EXPLANATION-FOR-KIDS-BG.md)
- [Programming lessons (Bulgarian)](kids-programming-lesson.md)

## 🤝 Contributing

Feel free to fork this project and submit pull requests. This is an educational project, so clear code and good comments are appreciated!

## 📝 License

This project is open source and available for educational use.

## 🌟 Acknowledgments

Created as an educational project to teach web development concepts to Bulgarian students.
