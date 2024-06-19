import { useEffect, useState } from "react"

import { LAST_NUMBER_IN_TIME } from "@/utils/constants"

export function useHours({
  seconds,
  minutes,
}: {
  seconds: number
  minutes: number
}) {
  const [hours, setHours] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (minutes === LAST_NUMBER_IN_TIME && seconds === LAST_NUMBER_IN_TIME) {
      timeout = setTimeout(() => {
        setHours((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [minutes, seconds])

  return hours
}
