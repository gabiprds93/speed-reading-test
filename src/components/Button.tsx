import { ButtonProps } from "@/utils/definitions"

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="flex text-[#0201CE] px-5 py-3  border border-[#0201CE] rounded-3xl gap-1"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
