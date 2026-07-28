import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointment, setAppointment] = useState({
    department: null,
    symptoms: [],
    doctor: null,
    slot: null,
    language: "English",
  });

  return (
    <AppointmentContext.Provider
      value={{ appointment, setAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}