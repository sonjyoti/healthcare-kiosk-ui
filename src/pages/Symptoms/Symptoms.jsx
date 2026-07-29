import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import SymptomCard from "../../components/cards/SymptomCard";
import BookingStepper from "../../components/progress/BookingStepper";

import { symptoms } from "../../data/symptoms";
import { useAppointment } from "../../context/AppointmentContext";

export default function Symptoms() {
  const navigate = useNavigate();

  const { actions } = useAppointment();

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    const exists = selectedSymptoms.find(
      (item) => item.id === symptom.id
    );

    if (exists) {
      setSelectedSymptoms(
        selectedSymptoms.filter(
          (item) => item.id !== symptom.id
        )
      );
    } else {
      setSelectedSymptoms([
        ...selectedSymptoms,
        symptom,
      ]);
    }
  };

  const continueHandler = () => {
    actions.selectSymptoms(selectedSymptoms);

    navigate("/recommendation");
  };

  return (
    <Layout>

      <PageHeader title="Select Symptoms" />
      <BookingStepper currentStep={2} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {symptoms.map((symptom) => (

          <SymptomCard
            key={symptom.id}
            symptom={symptom}
            selected={selectedSymptoms.some(
              (item) => item.id === symptom.id
            )}
            onClick={() => toggleSymptom(symptom)}
          />

        ))}

      </div>

      <button
        disabled={selectedSymptoms.length === 0}
        onClick={continueHandler}
        className="
          mt-10
          w-full
          h-16
          rounded-xl
          bg-blue-600
          text-white
          text-xl
          font-bold
          disabled:bg-gray-400
        "
      >
        Continue
      </button>

    </Layout>
  );
}