document.addEventListener("DOMContentLoaded", () => {
  let habits = StorageEngine.getHabits();

  const habitForm = document.getElementById("habit-form");
  const habitInput = document.getElementById("habit-input");
  const habitListContainer = document.getElementById("habit-list-container");
  const emptyState = document.getElementById("empty-state");
  const currentDateDisplay = document.getElementById("current-date-display");
  const weeklyDaysHeader = document.getElementById("weekly-days-header");
  const weeklyProgressBar = document.getElementById("weekly-progress-bar");
  const weeklyProgressText = document.getElementById("weekly-progress-text");

  function renderDate() {
    if (!currentDateDisplay) return;
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    currentDateDisplay.textContent = new Date().toLocaleDateString("en-US", options);
  }

  function renderWeeklyHeaders() {
    if (!weeklyDaysHeader) return;
    const days = DateUtils.getPastSevenDays();
    weeklyDaysHeader.innerHTML = "";

    days.forEach((date) => {
      const dayName = date.toLocaleDateString("en-US", { weekday: "narrow" });
      const dayNum = date.getDate();

      const headerCell = document.createElement("div");
      headerCell.className = "day-header";
      headerCell.innerHTML = `<span>${dayName}</span><small>${dayNum}</small>`;
      weeklyDaysHeader.appendChild(headerCell);
    });
  }

  function handleAddHabit(e) {
    e.preventDefault();
    const title = habitInput.value.trim();
    if (!title) return;

    const newHabit = {
      id: "habit-" + Date.now(),
      title: title,
      createdAt: DateUtils.formatISO(new Date()),
      completedDates: []
    };

    habits.push(newHabit);
    persistAndRender();
    habitInput.value = "";
  }

  function toggleHabit(habitId, dateStr) {
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return;

    const index = habit.completedDates.indexOf(dateStr);
    if (index === -1) {
      habit.completedDates.push(dateStr);
    } else {
      habit.completedDates.splice(index, 1);
    }

    persistAndRender();
  }

  function deleteHabit(habitId) {
    habits = habits.filter((h) => h.id !== habitId);
    persistAndRender();
  }

  function persistAndRender() {
    StorageEngine.saveHabits(habits);
    renderHabits();
  }

  function updateProgress() {
    if (!weeklyProgressBar || !weeklyProgressText) return;
    
    if (habits.length === 0) {
      weeklyProgressBar.style.width = "0%";
      weeklyProgressText.textContent = "0%";
      return;
    }

    const pastSevenDays = DateUtils.getPastSevenDays().map((d) => DateUtils.formatISO(d));
    const totalChecksPossible = habits.length * 7;
    let totalChecksActual = 0;

    habits.forEach((habit) => {
      pastSevenDays.forEach((dateStr) => {
        if (habit.completedDates.includes(dateStr)) {
          totalChecksActual++;
        }
      });
    });

    const percentage = Math.round((totalChecksActual / totalChecksPossible) * 100);
    weeklyProgressBar.style.width = `${percentage}%`;
    weeklyProgressText.textContent = `${percentage}%`;
  }

  function renderHabits() {
    if (!habitListContainer || !emptyState) return;
    
    habitListContainer.innerHTML = "";

    if (habits.length === 0) {
      emptyState.style.display = "block";
      updateProgress();
      return;
    }

    emptyState.style.display = "none";
    const pastSevenDays = DateUtils.getPastSevenDays();

    habits.forEach((habit) => {
      const row = document.createElement("div");
      row.className = "habit-row";

      const titleCol = document.createElement("div");
      titleCol.className = "col-habit";
      titleCol.textContent = habit.title;

      const daysCol = document.createElement("div");
      daysCol.className = "col-days";

      pastSevenDays.forEach((dateObj) => {
        const dateStr = DateUtils.formatISO(dateObj);
        const isChecked = habit.completedDates.includes(dateStr);

        const cell = document.createElement("div");
        cell.className = "day-cell";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isChecked;
        checkbox.addEventListener("change", () => toggleHabit(habit.id, dateStr));

        cell.appendChild(checkbox);
        daysCol.appendChild(cell);
      });

      const streakCol = document.createElement("div");
      streakCol.className = "col-streak";
      const streakCount = DateUtils.calculateStreak(habit.completedDates);
      streakCol.textContent = `🔥 ${streakCount}`;

      const actionCol = document.createElement("div");
      actionCol.className = "col-actions";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteHabit(habit.id));

      actionCol.appendChild(deleteBtn);

      row.appendChild(titleCol);
      row.appendChild(daysCol);
      row.appendChild(streakCol);
      row.appendChild(actionCol);

      habitListContainer.appendChild(row);
    });

    updateProgress();
  }

  // Bind Form Event Listener safely
  if (habitForm) {
    habitForm.addEventListener("submit", handleAddHabit);
  }

  // Initialize UI
  renderDate();
  renderWeeklyHeaders();
  renderHabits();
});
