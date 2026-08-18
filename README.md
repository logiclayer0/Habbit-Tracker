# HabitTracker Pro 🚀

An enterprise-grade, full-stack personal habit tracking application built with a modern Vanilla JavaScript modular frontend, high-performance Python (FastAPI) asynchronous backend, and containerized deployment workflow.

---

## 🌟 Key Features & Magic Elements

* **Modular Frontend Architecture:** Built with clean, decoupled JavaScript modules (`app.js`, `storage.js`, `dateUtils.js`) adhering to SOC (Separation of Concerns).
* **Dual Persistence Layer:** Seamless client-side state caching via LocalStorage with async synchronization capability for FastAPI backend.
* **Dynamic Streak & Progress Engine:** Algorithmic calculation of continuous daily streaks, active momentum rates, and weekly matrix heatmaps.
* **Production-Ready Containerization:** Dockerized microservices orchestrated via `docker-compose` for instant deployment.
* **FastAPI Backend Services:** High-throughput, async REST endpoints for habit management, statistics calculation, and analytical rollups.

---

## 🛠 Tech Stack & Dependencies

* **Frontend:** HTML5, CSS3 Custom Properties (CSS Variables, Grid, Flexbox), Vanilla ES6+ JS
* **Backend:** Python 3.11+, FastAPI, Uvicorn, Pydantic v2
* **DevOps & Infrastructure:** Docker, Docker Compose

---

## 📁 Repository Structure

```text
habit-tracker-pro/
├── docker-compose.yml
├── .env.example
├── README.md
├── requirements.txt
├── backend/
│   ├── Dockerfile
│   ├── main.py
│   └── app/
│       ├── config.py
│       ├── database.py
│       ├── models.py
│       └── routes/
│           └── habits.py
└── frontend/
    ├── Dockerfile
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        ├── app.js
        ├── dateUtils.js
        └── storage.js