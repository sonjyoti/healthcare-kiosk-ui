import {
  UserRound,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";

export default function DoctorCard({
  doctor,
  onSelect,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <div className="flex gap-5">

        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
          <UserRound
            size={40}
            className="text-blue-600"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            {doctor.name}
          </h2>

          <p className="text-gray-500">
            {doctor.qualification}
          </p>

          <p className="text-gray-500">
            {doctor.specialization}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" />
          {doctor.rating}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="text-green-600" />
          {doctor.experience} Years
        </div>

        <div className="flex items-center gap-2">
          <BadgeCheck className="text-blue-600" />
          Score {doctor.score}%
        </div>

        <div>
          {doctor.availableToday
            ? "🟢 Available Today"
            : `Next: ${doctor.nextAvailableSlot}`}
        </div>

      </div>

      <button
        onClick={onSelect}
        className="
            mt-8
            bg-blue-600
            hover:bg-blue-700
            text-white
            w-full
            py-4
            rounded-xl
            font-semibold
        "
      >
        Select Doctor
      </button>

    </div>
  );
}