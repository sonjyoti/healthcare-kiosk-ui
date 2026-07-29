import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import DepartmentCard from "../../components/cards/DepartmentCard";
import BookingStepper from "../../components/progress/BookingStepper";

import { departments } from "../../data/departments";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../../context/AppointmentContext";

export default function Department() {
  const navigate = useNavigate();
  const { actions } = useAppointment();

  return (
    <Layout>
      <PageHeader title="Select Department" />

      <BookingStepper currentStep={1} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
            onClick={() => {
              actions.selectDepartment(department);
              navigate("/symptoms");
            }}
          />
        ))}
      </div>
    </Layout>
  );
}