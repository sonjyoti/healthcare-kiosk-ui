import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import DepartmentCard from "../../components/cards/DepartmentCard";
import { departments } from "../../data/departments";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../../context/AppointmentContext";

export default function Department() {
  const navigate = useNavigate();
  const { setAppointment } = useAppointment();
  return (
    <Layout>
      <PageHeader title="Select Department" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
            onClick={() => {
              setAppointment((prev) => ({
                ...prev,
                department: department,
              }));

              navigate("/symptoms");
            }}
          />
        ))}
      </div>
    </Layout>
  );
}