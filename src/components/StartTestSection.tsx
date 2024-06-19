"use client"
import { useState } from "react"

import Button from "./Button"
import Timer from "./Timer"
import PlayIcon from "@/icons/PlayIcon"

export default function StartTestSection() {
  const [showPlayButton, setShowPlayButton] = useState(true)

  return (
    <>
      {showPlayButton && (
        <Button onClick={() => setShowPlayButton(false)}>
          <PlayIcon />

          <span>Iniciar</span>
        </Button>
      )}

      {!showPlayButton && <Timer />}
    </>
  )
}
