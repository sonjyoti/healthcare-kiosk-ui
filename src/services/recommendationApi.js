import api from "./api/axiosInstance";

export const getRecommendations = (payload) => {
    return api.post("/recommendations", payload);
};