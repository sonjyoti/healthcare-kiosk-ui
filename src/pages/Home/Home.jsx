import Layout from "../../components/layout/Layout";
import Header from "../../components/layout/Header";
import Button from "../../components/common/Button";
import LanguageButton from "../../components/common/LanguageButton";
import { useNavigate } from "react-router-dom";
import {
    FaCalendarCheck,
    FaFileMedical,
    FaQuestionCircle
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>

      <Header />

      <div className="flex justify-center gap-4 mb-10">

        <LanguageButton language="English" />

        <LanguageButton language="हिन्दी" />

        <LanguageButton language="অসমীয়া" />

      </div>

      <div className="space-y-6">

        <Button
          icon={<FaCalendarCheck />}
          onClick={() => navigate("/department")}
      >
          Book Appointment
      </Button>

      <Button
          icon={<FaFileMedical />}
          variant="secondary"
          onClick={() => navigate("/forms")}
      >
          Healthcare Forms
      </Button>

      <Button
          icon={<FaQuestionCircle />}
          variant="outline"
          onClick={() => navigate("/help")}
      >
          Help
      </Button>

      </div>

    </Layout>
  )
}