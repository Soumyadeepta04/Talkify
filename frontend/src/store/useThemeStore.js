import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Talkify-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Talkify-theme", theme);
    set({ theme});
  },
}));



