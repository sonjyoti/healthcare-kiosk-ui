import api from "./api/axiosInstance";

export const getAvailableSlots = (doctorId) => {
    return api.get(`/availability/${doctorId}`);
};