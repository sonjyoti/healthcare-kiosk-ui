import api from "./api/axiosInstance";

export const getForms = () => {
    return api.get("/forms");
};