"use client"
import { useState } from "react"

import Button from "./Button"
import Timer from "./Timer"
import { useTime } from "@/hooks/useTime"
import PlayIcon from "@/icons/PlayIcon"

export default function StartTestSection() {
  const [showPlayButton, setShowPlayButton] = useState(true)
  const { playTime } = useTime()

  const handlePlayButton = () => {
    setShowPlayButton(false)
    playTime()
  }

  return (
    <>
      {showPlayButton && (
        <Button onClick={handlePlayButton}>
          <PlayIcon />

          <span>Iniciar</span>
        </Button>
      )}

      {!showPlayButton && <Timer />}
    </>
  )
}
