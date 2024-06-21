import { useEffect, useState } from "react"

import { useTime } from "./useTime"
import { LAST_NUMBER_IN_TIME } from "@/utils/constants"

export function useHours({
  seconds,
  minutes,
}: {
  seconds: number
  minutes: number
}) {
  const [hours, setHours] = useState(0)
  const { isFinish, changeHours } = useTime()

  useEffect(() => {
    if (isFinish) {
      changeHours(hours)
      return
    }

    let timeout: NodeJS.Timeout | null = null

    if (minutes === LAST_NUMBER_IN_TIME && seconds === LAST_NUMBER_IN_TIME) {
      timeout = setTimeout(() => {
        setHours((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [changeHours, hours, isFinish, minutes, seconds])

  return hours
}
