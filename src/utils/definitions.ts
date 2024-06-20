import {
  AriaAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
} from "react"

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

export interface ITimeContext {
  time: ITime
  setTime: Dispatch<SetStateAction<ITime>>
}
