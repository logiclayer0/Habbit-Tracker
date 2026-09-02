<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>⚡ HabitTracker Pro - Documentation</title>
  <style>
    :root {
      --bg-color: #0d1117;
      --card-bg: #161b22;
      --border-color: #30363d;
      --text-main: #c9d1d9;
      --text-muted: #8b949e;
      --accent-color: #58a6ff;
      --badge-bg: #21262d;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      line-height: 1.6;
      margin: 0;
      padding: 40px 20px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 40px;
      border-radius: 12px;
      border: 1px solid var(--border-color);
    }

    h1, h2, h3 { color: #ffffff; margin-top: 1.5em; }
    h1 { font-size: 2.2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-top: 0; }
    h2 { font-size: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; }

    a { color: var(--accent-color); text-decoration: none; }
    a:hover { text-decoration: underline; }

    blockquote {
      background: var(--badge-bg);
      border-left: 4px solid var(--accent-color);
      margin: 20px 0;
      padding: 12px 20px;
      color: var(--text-muted);
    }

    pre, code {
      background: #0d1117;
      color: #e6edf3;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.9rem;
      border-radius: 6px;
    }

    code { padding: 3px 6px; }

    pre {
      padding: 16px;
      overflow-x: auto;
      border: 1px solid var(--border-color);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: left;
    }

    th { background: var(--badge-bg); color: #fff; }

    ul { padding-left: 20px; }
    li { margin-bottom: 6px; }

    .badges { margin: 15px 0; display: flex; gap: 8px; flex-wrap: wrap; }
    .badges img { height: 28px; }

    .formula-box {
      background: var(--badge-bg);
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      margin: 15px 0;
      border: 1px solid var(--border-color);
    }
  </style>
</head>
<body>

<div class="container">

  <h1>⚡ HabitTracker Pro</h1>
  <blockquote>
    <strong>A High-Performance Habit & Consistency Tracking Engine</strong><br>
    Track daily executions, compute rolling weekly metrics, and maintain streaks with local-first storage and FastAPI backend integration.
  </blockquote>

  <div class="badges">
    <a href="https://habbit-tracker-nu-taupe.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"></a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python&logoColor=white" alt="Python">
    <img src="https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  </div>

  <h2>🌐 Live Demo</h2>
  <p>🚀 <strong>Frontend Deployment:</strong> <a href="https://habbit-tracker-nu-taupe.vercel.app/" target="_blank">https://habbit-tracker-nu-taupe.vercel.app/</a></p>

  <h2>🚀 Overview</h2>
  <p><strong>HabitTracker Pro</strong> is designed to eliminate daily habit-tracking friction by offering a lightweight, responsive, and persistent workspace. It provides visual feedback on daily targets, dynamic weekly completion rates, and streak calculation logic—ensuring users maintain disciplined habits over time.</p>

  <h2>✨ Key Features</h2>
  <ul>
    <li><strong>🔥 Dynamic Streak Calculation:</strong> Real-time streak tracking that accounts for continuous daily completions without missing a beat.</li>
    <li><strong>📊 Weekly Execution Analytics:</strong> Rolling 7-day progress bar providing an immediate visual percentage of total habits executed.</li>
    <li><strong>⚡ Dual Mode Architecture:</strong> Operates seamlessly via local <code>StorageEngine</code> (browser storage) with instant response times and optional REST API backend sync.</li>
    <li><strong>🗓️ Dynamic Date Matrix:</strong> Auto-calculates and displays past 7-day calendar headers with live date tracking.</li>
    <li><strong>🎨 Dark Theme UI:</strong> Modern, distraction-free dark interface with high-contrast indicator badges and smooth controls.</li>
  </ul>

  <h2>🏗️ Architecture</h2>
<pre>
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
</pre>

  <h2>🛠️ Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li><strong>HTML5 & CSS3:</strong> Custom flexbox/grid layout with CSS variables for dark-mode aesthetic.</li>
    <li><strong>Vanilla JavaScript (ES6+):</strong> Pure JS modules (<code>dateUtils.js</code>, <code>storage.js</code>, <code>app.js</code>) without heavy external bundle dependencies.</li>
    <li><strong>Hosting:</strong> Vercel</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li><strong>Python 3.10+:</strong> Core runtime environment.</li>
    <li><strong>FastAPI & Uvicorn:</strong> Lightning-fast RESTful API web server with automatic OpenAPI Swagger generation.</li>
    <li><strong>Hosting:</strong> Render</li>
  </ul>

  <h2>📂 Project Structure</h2>
<pre>
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
</pre>

  <h2>⚙️ Installation & Setup</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li><strong>Python:</strong> v3.10 or higher</li>
    <li><strong>Browser:</strong> Any modern browser (Chrome, Edge, Firefox, Brave)</li>
  </ul>

  <h3>Backend Setup</h3>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre>git clone https://github.com/your-username/habit-tracker-pro.git
cd habit-tracker-pro</pre>
    </li>
    <li><strong>Create and activate virtual environment:</strong>
      <pre># Windows (PowerShell)
python -m venv venv
.\venv\Scripts\Activate.ps1</pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre>pip install -r requirements.txt</pre>
    </li>
    <li><strong>Start FastAPI Server:</strong>
      <pre>$env:PYTHONPATH="backend"; python -m uvicorn backend.main:app --reload --port 8000</pre>
    </li>
  </ol>

  <h3>Frontend Setup</h3>
  <p>Run static server in terminal:</p>
  <pre>python -m http.server 8080 --directory frontend</pre>

  <h2>📡 API Endpoints</h2>
  <table>
    <thead>
      <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>GET</td><td>/</td><td>Health Check / Server Verification</td></tr>
      <tr><td>GET</td><td>/docs</td><td>OpenAPI / Swagger Interactive Documentation</td></tr>
      <tr><td>GET</td><td>/api/v1/habits</td><td>Retrieve all registered habits</td></tr>
      <tr><td>POST</td><td>/api/v1/habits</td><td>Register/Commit a new core habit target</td></tr>
      <tr><td>DELETE</td><td>/api/v1/habits/{id}</td><td>Remove a target habit</td></tr>
    </tbody>
  </table>

  <h2>🧮 Key Utilities & Calculations</h2>
  <h3>Weekly Execution Rate Formula</h3>
  <div class="formula-box">
    Execution Rate (%) = ( Total Checkboxes Marked across 7 Days / (Total Habits × 7) ) × 100
  </div>

  <h3>Streak Calculation Logic</h3>
  <ul>
    <li>Reads completed ISO date arrays sorted in reverse order.</li>
    <li>Verifies active status against current date (today) or yesterday.</li>
    <li>Increments streak counter continuously back until a break in execution occurs.</li>
  </ul>

  <h2>📌 Future Roadmap</h2>
  <ul>
    <li>[ ] PostgreSQL / SQLite persistence integration.</li>
    <li>[ ] Category tags & habit priority levels.</li>
    <li>[ ] Export habits history to CSV / JSON format.</li>
    <li>[ ] User authentication & multi-tenant profile management.</li>
  </ul>

  <h2>📜 License</h2>
  <p>Distributed under the <strong>MIT License</strong>.</p>

</div>

</body>
</html>
