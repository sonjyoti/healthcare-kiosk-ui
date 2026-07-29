import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import BookingStepper from "../../components/progress/BookingStepper";
import SelectionSummary from "../../components/common/SelectionSummary";
import DoctorCard from "../../components/cards/DoctorCard";

import { useAppointment } from "../../context/AppointmentContext";
import useRecommendations from "../../hooks/useRecommendations";

export default function Recommendation() {
  const navigate = useNavigate();

  const { appointment, actions } = useAppointment();

  const { doctors, loading, error } = useRecommendations(
    appointment.department,
    appointment.symptoms
  );

  const handleDoctorSelection = (doctor) => {
    actions.selectDoctor(doctor);
    navigate("/slots");
  };

  return (
    <Layout>
      <PageHeader title="Recommended Doctors" />

      <BookingStepper currentStep={3} />

      <SelectionSummary />

      <h2 className="text-3xl font-bold mb-6">
        Recommended Doctors
      </h2>

      {loading && (
        <div className="text-center py-10 text-xl">
          Loading recommendations...
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-xl">
          Failed to load recommendations.
        </div>
      )}

      {!loading && !error && doctors.length === 0 && (
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-xl">
          No doctors available.
        </div>
      )}

      {!loading && !error && doctors.length > 0 && (
        <div className="space-y-6">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelect={() => handleDoctorSelection(doctor)}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}