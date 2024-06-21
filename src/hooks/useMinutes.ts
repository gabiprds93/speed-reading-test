import { useEffect, useState } from "react"

import { useTime } from "./useTime"
import { LAST_NUMBER_IN_TIME } from "@/utils/constants"

export function useMinutes({ seconds }: { seconds: number }) {
  const [minutes, setMinutes] = useState(0)
  const { isFinish, changeMinutes } = useTime()

  useEffect(() => {
    if (isFinish) {
      changeMinutes(minutes)
      return
    }

    const timeout = setTimeout(() => {
      setMinutes((prev) => {
        if (prev === LAST_NUMBER_IN_TIME && seconds === LAST_NUMBER_IN_TIME)
          return 0
        if (seconds === LAST_NUMBER_IN_TIME) return prev + 1
        return prev
      })
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [changeMinutes, isFinish, minutes, seconds])

  return minutes
}
