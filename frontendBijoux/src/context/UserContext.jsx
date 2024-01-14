// import { Children, createContext, useState } from "react"

// export const UserStateContext = createContext({
//     user: {},
//     setUser: () => {},
//     logout: () => {},
// })
// export default function UserContext() {
//     const [user, setUser] = useState({
//       name: 'assia',
//     })
//     const logout = () => {}
//   return (
//     <UserStateContext.Provider value={{
//         user,
//         setUser,
//         logout
//     }}>
//         {Children}
//     </UserStateContext.Provider>
//   )
// }
import { createContext, useContext, useState } from "react";
import ClientApi from "../services/Api/Client/ClientApi.jsx";
// import { CLIENT_HOME_ROUTE } from "../router.jsx";

export const UserStateContext = createContext({
    user: {},
    authenticated: false,
    setUser: () => {},
    logout: () => {},
    // eslint-disable-next-line no-unused-vars
    login: (email, password) => {},
    setAuthenticated: () => {},
    setToken: () => {},
});

export function UserContext({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState({});
    const [authenticated, _setAuthenticated] = useState(
        "true" === window.localStorage.getItem("Authenticated")
    );
    // const navigate = useNavigate();

    const login = async (email, password) => {
        //await ClientApi.getCsrfToken()
        return await ClientApi.login(email, password);
    };
    const logout = () => {
        setUser({});
        setAuthenticated(false);
    };

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("Authenticated", isAuthenticated);
    };

    const setToken = (token) => {
        window.localStorage.setItem("token", token);
    };
    return (
        <>
            <UserStateContext.Provider
                value={{
                    user,
                    setUser,
                    authenticated,
                    setAuthenticated,
                    login,
                    logout,
                    setToken,
                }}
            >
                {children}
            </UserStateContext.Provider>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserStateContext);
