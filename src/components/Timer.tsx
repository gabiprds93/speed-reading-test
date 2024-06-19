import { useMinutes } from "@/hooks/useMinutes"
import { useSeconds } from "@/hooks/useSeconds"
import { useHours } from "@/hooks/useHours"
import { formatTime } from "@/utils/helpers"

export default function Timer() {
  const seconds = useSeconds()
  const minutes = useMinutes({ seconds })
  const hours = useHours({ seconds, minutes })

  const secondsText = formatTime(seconds)
  const minutesText = formatTime(minutes)
  const hoursText = formatTime(hours)

  return (
    <div className="w-28 text-[#0201CE] border border-[#0201CE] rounded-3xl px-5 py-3">
      {hoursText}:{minutesText}:{secondsText}
    </div>
  )
}
