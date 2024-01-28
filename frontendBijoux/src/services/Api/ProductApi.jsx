import axios from "axios";
import { axiosClient } from "../../api/axios";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
const ProductApi = {
    create: async (payload) => {
        return await axiosClient.post("/admin/products", payload);
    },
    getAll: async () => {
        return await axiosClient.get("/admin/products");
    },
    All: async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/products`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    show: async (productId) => {
        try {
            const response = await axiosClient.get(`/product/${productId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createCategories: async (payload) => {
        return await axiosClient.post("/admin/categories", payload);
    },
    getAllCategories: async () => {
        return await axiosClient.get("/admin/categories");
    },
};

export default ProductApi;
