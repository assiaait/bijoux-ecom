import { axiosClient } from "../../api/axios";

const ProductApi = {
    create: async(payload) => {
        return await axiosClient.post('/products', {payload})
        
    },
}
export default ProductApi