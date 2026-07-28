import api from "./api/axiosInstance";

export const createAppointment = (appointment) => {
    return api.post("/appointments", appointment);
};

export const getAppointment = (id) => {
    return api.get(`/appointments/${id}`);
};