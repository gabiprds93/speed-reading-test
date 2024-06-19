import { FIRST_NUMBER_TWO_DIGITS } from "./constants"

export const formatTime = (time: number): string => {
  return time < FIRST_NUMBER_TWO_DIGITS ? `0${time}` : String(time)
}
