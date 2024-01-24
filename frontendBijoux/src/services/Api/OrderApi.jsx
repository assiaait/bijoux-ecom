import axios from "axios";
import { axiosClient } from "../../api/axios";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
const OrderApi = {
    create: async (payload) => {
        return await axiosClient.post("/client/place-order", payload);
    },
    getAllOrders: async () => {
        try {
          const response = await axiosClient.get(`${apiUrl}/api/admin/orders`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
};

export default OrderApi;
