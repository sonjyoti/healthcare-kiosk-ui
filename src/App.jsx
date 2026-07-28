import AppRoutes from "./routes/AppRoutes";
import { AppointmentProvider } from "./context/AppointmentContext";

export default function App() {
  return (
    <AppointmentProvider>
      <AppRoutes />
    </AppointmentProvider>
  );
}