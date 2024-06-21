import { useEffect, useState } from "react"

import { useTime } from "./useTime"
import { LAST_NUMBER_IN_TIME } from "@/utils/constants"

export function useSeconds() {
  const [seconds, setSeconds] = useState(1)
  const { isFinish, changeSeconds } = useTime()

  useEffect(() => {
    if (isFinish) {
      changeSeconds(seconds)
      return
    }

    const timeout = setTimeout(() => {
      setSeconds((prev) => {
        if (prev === LAST_NUMBER_IN_TIME) {
          return 0
        }
        return prev + 1
      })
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [seconds, isFinish, changeSeconds])

  return seconds
}
