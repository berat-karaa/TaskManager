# TaskManager - Task Management Application

TaskManager is a modern and user-friendly task management application developed with React and Node.js.

## Features

- 🔐 User Authentication (Register/Login)
- 📝 Create and Edit Tasks
- 🏷️ Categorize Tasks by Priority Levels
- 📅 Set Due Dates for Tasks
- ✅ Mark Tasks as Completed
- 🌓 Dark/Light Theme Support
- 📱 Responsive Design

## Technologies

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- Lucide Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt

🔐 Register Page
![Register](./screenshots/register.png)

🔓 Login Page
![Login](./screenshots/login.png)

🧑‍💼 Profile Page
![Profile](./screenshots/profile.png)

📊 Dashboard
![Dashboard](./screenshots/dashboard.png)

📋 Pending Tasks
![Pending Tasks](./screenshots/pending.png)

✅ Completed Tasks
![Completed Tasks](./screenshots/completed.png)

## Installation

1. Clone the project:
```bash
git clone https://github.com/berat-karaa/TaskManager.git
cd TaskManager
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create .env file for backend:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret
```

5. Start the application:

For backend:
```bash
cd backend
npm start
```

For frontend:
```bash
cd frontend
npm start
```

## Project Structure

```
görevYöneticisi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Owner - [@berat-karaa](https://github.com/berat-karaa)

Project Link: [https://github.com/berat-karaa/TaskManager](https://github.com/berat-karaa/TaskManager) 