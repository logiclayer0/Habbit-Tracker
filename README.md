# ⚡ HabitTracker Pro

> **A High-Performance Habit & Consistency Tracking Engine**
> Track daily executions, compute rolling weekly metrics, and maintain streaks with local-first storage and Fast-API backend integration.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://habbit-tracker-nu-taupe.vercel.app/)
![Python](https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🌐 Live Demo

🚀 **Frontend Deployment:** [https://habbit-tracker-nu-taupe.vercel.app/](https://habbit-tracker-nu-taupe.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#-api-endpoints)
- [Key Utilities & Calculations](#-key-utilities--calculations)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

**HabitTracker Pro** is designed to eliminate daily habit-tracking friction by offering a lightweight, responsive, and persistent workspace. It provides visual feedback on daily targets, dynamic weekly completion rates, and streak calculation logic—ensuring users maintain disciplined habits over time.

---

## ✨ Key Features

- **🔥 Dynamic Streak Calculation:** Real-time streak tracking that accounts for continuous daily completions without missing a beat.
- **📊 Weekly Execution Analytics:** Rolling 7-day progress bar providing an immediate visual percentage of total habits executed.
- **⚡ Dual Mode Architecture:** Operates seamlessly via local `StorageEngine` (browser storage) with instant response times and optional REST API backend sync.
- **🗓️ Dynamic Date Matrix:** Auto-calculates and displays past 7-day calendar headers with live date tracking.
- **🎨 Dark Theme UI:** Modern, distraction-free dark interface with high-contrast indicator badges and smooth controls.

---

## 🏗️ Architecture

```text
+-------------------------------------------------------+
|                    Browser / Client                   |
|  +-------------------+  +--------------------------+  |
|  |   index.html UI   |  |   app.js (Controller)    |  |
|  +---------+---------+  +------------+-------------+  |
|            |                         |                |
|            v                         v                |
|  +-------------------+  +--------------------------+  |
|  |   dateUtils.js    |  |   storage.js (Engine)    |  |
|  +-------------------+  +------------+-------------+  |
+--------------------------------------|----------------+
                                       | (REST API Sync)
                                       v
+-------------------------------------------------------+
|                    FastAPI Backend                    |
|  +-------------------+  +--------------------------+  |
|  |    main.py API    |  |   Pydantic / DB Sync     |  |
|  +-------------------+  +--------------------------+  |
+-------------------------------------------------------+
```

## 🛠️ Tech Stack
Frontend

HTML5 & CSS3: Custom flexbox/grid layout with CSS variables for dark-mode aesthetic.

Vanilla JavaScript (ES6+): Pure JS modules (dateUtils.js, storage.js, app.js) without heavy external bundle dependencies.

Hosting: Vercel

Backend

Python 3.10+: Core runtime environment.

FastAPI & Uvicorn: Lightning-fast RESTful API web server with automatic OpenAPI Swagger generation.

Hosting: Render

## 📂 Project Structure
```
habit-tracker/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   └── config.py
│   └── main.py
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── dateUtils.js
│   │   └── storage.js
│   └── index.html
├── .gitignore
├── README.md
└── requirements.txt
```

## ⚙️ Installation & Setup
Prerequisites
Python: v3.10 or higher

Browser: Any modern browser (Chrome, Edge, Firefox, Brave)

Backend Setup
1. Clone the repository:
```
git clone [https://github.com/your-username/habit-tracker-pro.git](https://github.com/your-username/habit-tracker-pro.git)
cd habit-tracker-pro
```
2. Create and activate a virtual environment:
```
# Windows (PowerShell)
python -m venv venv
.\venv\Scripts\Activate.ps1
```
3. Install dependencies:
```
pip install -r requirements.txt
```
4. Start the FastAPI Backend Server:
```
$env:PYTHONPATH="backend"; python -m uvicorn backend.main:app --reload --port 8000
```
Frontend Setup
Open a second terminal window in the project root directory and run the HTTP static server:
```
python -m http.server 8080 --directory frontend
```
## 📡 API Endpoints

Once the FastAPI backend is running, explore interactive documentation via Swagger UI at `/docs`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health Check / Server Verification |
| `GET` | `/docs` | OpenAPI / Swagger Interactive Documentation |
| `GET` | `/api/v1/habits` | Retrieve all registered habits |
| `POST` | `/api/v1/habits` | Register/Commit a new core habit target |
| `DELETE` | `/api/v1/habits/{id}` | Remove a target habit |

---

## 🧮 Key Utilities & Calculations

### Weekly Execution Rate Formula

$$\text{Execution Rate (\%)} = \left( \frac{\text{Total Checkboxes Marked across 7 Days}}{\text{Total Habits} \times 7} \right) \times 100$$

### Streak Calculation Logic

- Reads completed ISO date arrays sorted in reverse order.
- Verifies active status against current date (`today`) or immediate previous date (`yesterday`).
- Increments streak counter continuously back until a break in execution occurs.

---

## 📌 Future Roadmap

- [ ] PostgreSQL / SQLite persistence integration.
- [ ] Category tags & habit priority levels.
- [ ] Export habits history to CSV / JSON format.
- [ ] User authentication & multi-tenant profile management.

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AwesomeFeature`).
3. Commit your Changes (`git commit -m 'Add some AwesomeFeature'`).
4. Push to the Branch (`git push origin feature/AwesomeFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more details.


