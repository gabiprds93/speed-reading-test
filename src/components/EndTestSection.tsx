"use client"
import { useEffect, useState } from "react"

import Button from "./Button"
import { useTime } from "@/hooks/useTime"
import StopIcon from "@/icons/StopIcon"
import { MINUTES_IN_HOUR, WORDS_IN_TEXT } from "@/utils/constants"

export default function EndTestSection() {
  const [showResults, setShowResults] = useState(false)
  const [timeInMinutes, setTimeInMinutes] = useState(0)
  const [wordsPerMinute, setWordsPerMinute] = useState(0)
  const { stopTime, time, isStart } = useTime()

  const handleEndButton = () => {
    setShowResults(true)
    stopTime()
  }

  useEffect(() => {
    if (showResults) {
      const secondsInMinutes = time.seconds / MINUTES_IN_HOUR
      const hoursInMinutes = time.hours * MINUTES_IN_HOUR
      const newTimeInMinutes = hoursInMinutes + time.minutes + secondsInMinutes

      setTimeInMinutes(Number(newTimeInMinutes.toFixed(2)))
      setWordsPerMinute(Math.round(WORDS_IN_TEXT / newTimeInMinutes))
    }
  }, [showResults, time])

  if (!isStart) return

  return (
    <>
      {!showResults && (
        <Button onClick={handleEndButton}>
          <StopIcon />

          <span>Terminar</span>
        </Button>
      )}

      {showResults && (
        <div className="text-[#0201CE]">
          <p>Velocidad de Lectura = {timeInMinutes} minutos</p>

          <p>Velocidad Promedio = {wordsPerMinute} palabras por minuto</p>
        </div>
      )}
    </>
  )
}
