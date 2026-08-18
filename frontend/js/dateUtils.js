const DateUtils = {
  formatISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  getPastSevenDays() {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dates.push(d);
    }
    return dates;
  },

  calculateStreak(completedDates) {
    if (!completedDates || completedDates.length === 0) return 0;

    const sortedDates = [...completedDates].sort((a, b) => new Date(b) - new Date(a));
    const todayStr = this.formatISO(new Date());
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = this.formatISO(yesterday);

    if (!sortedDates.includes(todayStr) && !sortedDates.includes(yesterdayStr)) {
      return 0;
    }

    let streak = 0;
    let checkDate = new Date();

    if (!sortedDates.includes(todayStr)) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
      const checkStr = this.formatISO(checkDate);
      if (sortedDates.includes(checkStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  }
};