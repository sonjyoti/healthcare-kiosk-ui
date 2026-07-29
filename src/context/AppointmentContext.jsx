import { createContext, useContext, useMemo, useState } from "react";

const AppointmentContext = createContext();

const initialAppointment = {
  department: null,
  symptoms: [],
  doctor: null,
  slot: null,
  language: "English",
  token: null,
};

export function AppointmentProvider({ children }) {
  const [appointment, setAppointment] = useState(initialAppointment);

  const actions = useMemo(
    () => ({
      selectDepartment(department) {
        setAppointment((prev) => ({
          ...prev,
          department,
          symptoms: [],
          doctor: null,
          slot: null,
        }));
      },

      selectSymptoms(symptoms) {
        setAppointment((prev) => ({
          ...prev,
          symptoms,
          doctor: null,
          slot: null,
        }));
      },

      selectDoctor(doctor) {
        setAppointment((prev) => ({
          ...prev,
          doctor,
          slot: null,
        }));
      },

      selectSlot(slot) {
        setAppointment((prev) => ({
          ...prev,
          slot,
        }));
      },

      changeLanguage(language) {
        setAppointment((prev) => ({
          ...prev,
          language,
        }));
      },

      reset() {
        setAppointment(initialAppointment);
      },
    }),
    []
  );

  return (
    <AppointmentContext.Provider
      value={{
        appointment,
        actions,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointment must be used inside AppointmentProvider"
    );
  }

  return context;
}