import { ReactNode, createContext, useState } from "react"

import { ITime, ITimeContext } from "@/utils/definitions"

export const TimeContext = createContext<ITimeContext | null>(null)

export function TimeProvider({ children }: { children: ReactNode }) {
  const [time, setTime] = useState<ITime>({ hours: 0, minutes: 0, seconds: 0 })

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  )
}
