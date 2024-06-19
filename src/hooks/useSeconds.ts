import { useEffect, useState } from "react"

import { LAST_NUMBER_IN_TIME } from "@/utils/constants"

export function useSeconds() {
  const [seconds, setSeconds] = useState(1)

  useEffect(() => {
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
  }, [seconds])

  return seconds
}
