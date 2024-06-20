"use client"
import { useState } from "react"

import Button from "./Button"
import StopIcon from "@/icons/StopIcon"

export default function EndTestSection() {
  const [showResults, setShowResults] = useState(false)

  return (
    <>
      {!showResults && (
        <Button onClick={() => setShowResults(true)}>
          <StopIcon />
          <span>Terminar</span>
        </Button>
      )}

      {showResults && (
        <div>
          <p>Velocidad de Lectura = 0.07 minutos</p>

          <p>Velocidad Promedio = 2586 palabras palabras por minuto</p>
        </div>
      )}
    </>
  )
}
