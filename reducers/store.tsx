import { SETTING_STORE } from "@/types/store";
import { create } from "zustand";

export const useSettingStore = create(set => ({
    language: "english",
    setLanguage: () => set((state: SETTING_STORE) => ({ language: state.language === "english" ? "español" : "english"})),
}))