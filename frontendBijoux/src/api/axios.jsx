// import axios from "axios";

// export const axiosClient = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
//     withCredentials: true,
// })
// import axios from "axios";
// // import router from "../router";
// export const axiosClient = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
//     withCredentials: true,
// });
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + '/api',
  withCredentials: true,
})

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

export {axiosClient}
// axiosClient.interceptors.request.use((config) => {
//     const token = "123";
//     config.headers.Authorization = `Bearer ${token}`;
// });

// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             router.navigate("/login");
//             return error();
//         }
//         throw error;
//     }
// );
