import { Clock } from "lucide-react";

export default function SlotCard({
  slot,
  selected,
  onClick,
}) {
  return (
    <button
      disabled={!slot.available}
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        border-2
        p-5
        transition
        text-left

        ${
          selected
            ? "border-blue-600 bg-blue-100"
            : "border-gray-200"
        }

        ${
          !slot.available
            ? "opacity-50 cursor-not-allowed"
            : "hover:border-blue-500"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Clock className="text-blue-600" />

        <span className="font-semibold">
          {slot.time}
        </span>

        <span className="ml-auto">
          {slot.available ? "Available" : "Booked"}
        </span>
      </div>
    </button>
  );
}