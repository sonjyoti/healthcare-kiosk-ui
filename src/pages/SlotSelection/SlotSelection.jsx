import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import BookingStepper from "../../components/progress/BookingStepper";
import SelectionSummary from "../../components/common/SelectionSummary";
import SlotCard from "../../components/cards/SlotCard";

import { useAppointment } from "../../context/AppointmentContext";
import useSlots from "../../hooks/useSlots";

export default function SlotSelection() {
  const navigate = useNavigate();

  const { appointment, actions } = useAppointment();

  const { slots, loading, error } = useSlots(
    appointment.doctor?.id
  );

  const handleSlotSelection = (slot) => {
    actions.selectSlot(slot);
    navigate("/confirmation");
  };

  return (
    <Layout>
      <PageHeader title="Choose Time Slot" />

      <BookingStepper currentStep={4} />

      <SelectionSummary />

      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <h2 className="text-xl font-bold">
          Selected Doctor
        </h2>

        <p className="mt-2">
          {appointment.doctor?.name}
        </p>

        <p className="text-gray-500">
          {appointment.doctor?.specialization}
        </p>
      </div>

      {loading && (
        <p className="text-center py-10">
          Loading available slots...
        </p>
      )}

      {error && (
        <p className="text-red-600">
          Failed to load slots.
        </p>
      )}

      {!loading && (
        <div className="grid grid-cols-2 gap-4">
          {slots.map((slot) => (
            <SlotCard
              key={slot.id}
              slot={slot}
              selected={appointment.slot?.id === slot.id}
              onClick={() => handleSlotSelection(slot)}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}