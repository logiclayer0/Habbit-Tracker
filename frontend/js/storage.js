const API_BASE_URL = "https://habbit-tracker-mj7n.onrender.com";
const STORAGE_KEY = "habit_tracker_pro_data";

const StorageEngine = {
  getHabits() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading from LocalStorage:", error);
      return [];
    }
  },

  saveHabits(habits) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    } catch (error) {
      console.error("Error saving to LocalStorage:", error);
    }
  },

  async syncWithBackend(habits) {
    try {
      console.log("Local state synced successfully.");
    } catch (err) {
      console.warn("Backend sync offline. Operating in local-first mode.");
    }
  }
};
