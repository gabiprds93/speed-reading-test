import { create } from "zustand"

import { IStoreTime } from "@/utils/definitions"

export const useTime = create<IStoreTime>()((set) => ({
  time: { hours: 0, minutes: 0, seconds: 1 },
  isStart: false,
  isFinish: false,
  changeSeconds: (seconds: number) =>
    set((state) => ({ time: { ...state.time, seconds } })),
  changeMinutes: (minutes: number) =>
    set((state) => ({ time: { ...state.time, minutes } })),
  changeHours: (hours: number) =>
    set((state) => ({ time: { ...state.time, hours } })),
  playTime: () => set(() => ({ isStart: true })),
  stopTime: () => set(() => ({ isFinish: true })),
}))
