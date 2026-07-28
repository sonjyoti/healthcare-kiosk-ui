import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import { useAppointment } from "../../context/AppointmentContext";

export default function Symptoms() {
  const { appointment } = useAppointment();

  return (
    <Layout>
      <PageHeader title="Symptoms" />

      <h2 className="text-3xl font-bold text-blue-700">
        {appointment.department?.name}
      </h2>

      <p className="mt-4 text-lg">
        Select your symptoms.
      </p>
    </Layout>
  );
}