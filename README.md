📊 HabitTracker Pro
A Full-Stack Habit Tracking & Consistency Engine

https://img.shields.io/badge/Python-3.11+-blue?style=for-the-badge&logo=python
https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi
https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript
https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker
https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel
https://img.shields.io/badge/License-MIT-green?style=for-the-badge

📋 Table of Contents
Overview

Key Features

Architecture

Tech Stack

Project Structure

Installation & Setup

API Endpoints

Core Calculations

Contributing

License

1. Overview
HabitTracker Pro is an enterprise-grade habit tracking application designed to help users build and maintain consistent daily habits. Built with a modular architecture, it combines a lightweight Vanilla JavaScript frontend with a high-performance FastAPI backend, offering both local-first storage and cloud synchronization capabilities.

The application provides real-time feedback on daily completions, visual weekly progress tracking, and intelligent streak calculations to keep users motivated and accountable.

🔗 Live Demo: habbit-tracker-seven-blue.vercel.app

2. Key Features
Feature	Description
🔥 Dynamic Streak Tracking	Real-time algorithm that tracks continuous daily completions with intelligent break detection
📊 Weekly Analytics Dashboard	Rolling 7-day progress bar showing percentage of total habits completed
⚡ Dual Persistence Layer	Seamless client-side caching via LocalStorage with optional FastAPI backend sync
🗓️ Smart Date Matrix	Auto-generated 7-day calendar view with live date tracking and visual indicators
🎨 Modern Dark UI	Distraction-free dark theme with high-contrast badges and smooth animations
🐳 Production Ready	Fully containerized with Docker and Docker Compose for instant deployment
📱 Responsive Design	Optimized for all devices from mobile to desktop screens
3. Architecture
text
┌─────────────────────────────────────────────────────────────────┐
│                        Browser / Client                        │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │   index.html UI    │  │     app.js (Controller)          │  │
│  └────────────────────┘  └──────────────────────────────────┘  │
│           │                            │                       │
│           ▼                            ▼                       │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │   dateUtils.js     │  │   storage.js (Storage Engine)   │  │
│  └────────────────────┘  └──────────────────────────────────┘  │
└─────────────────────────────────────┬───────────────────────────┘
                                      │ (Optional API Sync)
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FastAPI Backend                           │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │   main.py (API)    │  │   Pydantic Models / DB Sync     │  │
│  └────────────────────┘  └──────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
4. Tech Stack
Frontend
Technology	Purpose
HTML5	Semantic markup with modern accessibility standards
CSS3	Custom properties, CSS Grid, Flexbox, Dark theme variables
Vanilla ES6+ JS	Pure JavaScript modules with no external dependencies
Backend
Technology	Purpose
Python 3.11+	Core runtime environment
FastAPI	High-performance REST API with automatic OpenAPI documentation
Uvicorn	ASGI server for asynchronous request handling
Pydantic v2	Data validation, serialization, and settings management
DevOps & Infrastructure
Technology	Purpose
Docker	Containerization for consistent development and production environments
Docker Compose	Multi-container orchestration
Vercel	Frontend hosting and continuous deployment
5. Project Structure
text
habit-tracker-pro/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── models.py
│   │   └── routes/
│   │       ├── __init__.py
│   │       └── habits.py
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── dateUtils.js
│   │   └── storage.js
│   ├── Dockerfile
│   └── index.html
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
6. Installation & Setup
Prerequisites
Python 3.11 or higher

Docker (optional, for containerized deployment)

Modern web browser (Chrome, Firefox, Edge, Brave)

Method 1: Local Development
Backend Setup
bash
# Clone the repository
git clone https://github.com/your-username/habit-tracker-pro.git
cd habit-tracker-pro

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
python -m uvicorn backend.main:app --reload --port 8000
Frontend Setup
bash
# Open a new terminal and serve static files
python -m http.server 8080 --directory frontend
Access the application at http://localhost:8080 and API docs at http://localhost:8000/docs

Method 2: Docker Deployment
bash
# Build and run with Docker Compose
docker-compose up --build

# Services will be available at:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Documentation: http://localhost:8000/docs
7. API Endpoints
Method	Endpoint	Description	Request Body
GET	/	Health check / Server verification	-
GET	/docs	OpenAPI / Swagger Interactive Documentation	-
GET	/api/v1/habits	Retrieve all registered habits	-
POST	/api/v1/habits	Register a new habit target	{"name": "string", "dailyTarget": integer}
PUT	/api/v1/habits/{id}	Update an existing habit	{"name": "string", "dailyTarget": integer}
DELETE	/api/v1/habits/{id}	Remove a target habit	-
GET	/api/v1/stats	Get overall habit statistics	-
Example Response
json
{
  "habits": [
    {
      "id": "habit_001",
      "name": "Morning Meditation",
      "dailyTarget": 1,
      "completedDates": ["2026-08-15", "2026-08-14", "2026-08-13"],
      "streak": 12,
      "consistency": 85.7
    }
  ],
  "weeklyExecutionRate": 78.5,
  "totalHabits": 1,
  "activeStreaks": 1
}
8. Core Calculations
Weekly Execution Rate
text
Execution Rate (%) = (Total Checkboxes Marked / (Total Habits × 7)) × 100
Streak Calculation Algorithm
Retrieve completed dates sorted in reverse chronological order

Verify continuous completion from current date backward

Handle edge cases (missing dates, breaks, grace periods)

Return current streak count with active status

Performance Optimizations
O(1) Lookup: Set data structures for date verification

Memoization: Cached weekly analytics to prevent redundant computation

Batch Operations: Grouped localStorage operations to minimize I/O

Debounced Updates: Smooth UI updates during rapid interactions

9. Contributing
We welcome contributions from the community! Follow these steps:

Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a Pull Request

Development Guidelines
Follow PEP 8 for Python code

Use ES6+ standards for JavaScript

Write clear commit messages

Add documentation for new features

Include tests where applicable

10. License
Distributed under the MIT License. See LICENSE for more information.

<div align="center">
🌐 Live Demo • 🐛 Report Bug • 💡 Request Feature



</div>
