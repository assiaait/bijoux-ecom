import axios from "axios";
import { axiosClient } from "../../api/axios";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
const OrderApi = {
    create: async (payload) => {
        return await axiosClient.post("/client/place-order", payload);
    },
    // getAll: async () => {
    //     return await axiosClient.get("/admin/products");
    // },
    // All: async () => {
    //     try {
    //       const response = await axios.get(`${apiUrl}/api/products`);
    //       return response.data;
    //     } catch (error) {
    //       throw error;
    //     }
    //   },
};

export default OrderApi;
