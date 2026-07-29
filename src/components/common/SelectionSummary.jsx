import { HeartPulse } from "lucide-react";
import { useAppointment } from "../../context/AppointmentContext";

export default function SelectionSummary() {
  const { appointment } = useAppointment();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Your Selection
      </h2>

      <div className="mb-6">
        <div className="flex items-center gap-2 text-blue-600 font-semibold">
          <HeartPulse size={20} />
          Department
        </div>

        <p className="mt-2 text-lg">
          {appointment.department?.name}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-blue-600 mb-2">
          Symptoms
        </h3>

        <div className="flex flex-wrap gap-2">
          {appointment.symptoms.map((symptom) => (
            <span
              key={symptom.id}
              className="px-3 py-2 bg-blue-100 rounded-full"
            >
              {symptom.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}