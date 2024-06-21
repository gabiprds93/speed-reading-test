import { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {}

export interface ITime {
  hours: number
  minutes: number
  seconds: number
}

export interface IStoreTime {
  time: ITime
  isStart: boolean
  isFinish: boolean
  changeSeconds: (seconds: number) => void
  changeMinutes: (minutes: number) => void
  changeHours: (hours: number) => void
  playTime: () => void
  stopTime: () => void
}
