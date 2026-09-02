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
