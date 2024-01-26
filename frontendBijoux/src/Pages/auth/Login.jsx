import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { axiosClient } from "../../api/axios";
import { ADMIN_DASHBOARD_ROUTE, CLIENT_HOME_ROUTE } from "../../router";
import { useUserContext } from "../../context/UserContext.jsx";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, setAuthenticated, setToken } = useUserContext();
  

    const onSumbit = async (values) => {
        await login(values.email, values.password).then((values) => {
            // Naviguer vers la page d'accueil de l'utilisateur
            if (values.status === 200) {
                setToken(values.data.token);
                setAuthenticated(true);
                const { role } = values.data.user;
                switch (role) {
                    case 'client':
                        navigate(CLIENT_HOME_ROUTE);
                        break;
                    case 'admin':
                        navigate(ADMIN_DASHBOARD_ROUTE);
                        break;
                }
                
            }
        });
    };

    return (
        <div>
            <main
                className="d-flex row justify-content-center mb-5"
                style={{ margin: "auto" }}
            >
                <div style={{ width: "35vw" }}>
                    <h1
                        style={{
                            textAlign: "center",
                            paddingRight: "5vw",
                            fontSize: "34px",
                            fontWeight: "400",
                            lineHeight: "40px",
                            letterSpacing: "0.04em",
                        }}
                    >
                        Login
                    </h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSumbit({ email, password });
                        }}
                    >
                        <div className="mt-4 ">
                            <label
                                className="mb-3"
                                style={{
                                    color: "#000",
                                    maxWidth: "700px",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                }}
                                htmlFor="email"
                            >
                                Username or email address *
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                style={{
                                    color: "#000",
                                    maxWidth: "400px",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    borderRadius: "0",
                                }}
                                className="p-3 form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mt-3 ">
                            <label
                                className="mb-3"
                                style={{
                                    color: "#000",
                                    maxWidth: "700px",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                }}
                                htmlFor=""
                            >
                                Password *
                            </label>
                            <input
                                type="password"
                                value={password}
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    color: "#000",
                                    maxWidth: "400px",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    borderRadius: "0",
                                }}
                                className="p-3 form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn my-3"
                            onSubmit={onSumbit}
                            style={{
                                width: "400px",
                                margin: 0,
                                color: "#fff",
                                background: "#181818",
                                border: "none",
                            }}
                        >
                            Log In
                        </button>
                        <p
                            style={{
                                textAlign: "center",
                                color: "#afb1b5",
                                paddingRight: "5vw",
                                fontSize: "18px",
                            }}
                        >
                            Not A Member?{" "}
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "#34513f",
                                    fontWeight: "500",
                                    paddingLeft: "10px",
                                }}
                                to="/Register"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
}
export default Login;
