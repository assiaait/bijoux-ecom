import { axiosClient } from "../../api/axios";

const ProductApi = {
    create: async(payload) => {
        return await axiosClient.post('/admin/products', payload)
        
    },
    getAll: async() => {
        return await axiosClient.get('/admin/products')
        
    },
    
}
export default ProductApi