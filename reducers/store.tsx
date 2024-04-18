import { SETTING_STORE } from "@/types/store";
import { create } from "zustand";

export const useSettingStore = create(set => ({
    language: "english",
    setLanguage: (payload: string) => set((state: SETTING_STORE) => ({ language: payload})),
}))