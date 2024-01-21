import { createContext, useContext, useState } from "react";
import { apiClient } from "../../api/ApiClient";
import { userLogin } from "../../api/AuthenticationApiService";

//1.Create a Context
export const AuthContext = createContext<any>("defaultValue");

//2.Share the created context with other components
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: any) {
  //3.Put some state in the context
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUserName] = useState(null);
  const [token, setToken] = useState<string>("");

  // 이런식으로 객체형태로 사용할수도 있다.
  const valueToBeShared = { isAuthenticated, setIsAuthenticated };

  async function login(email: any, password: any) {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await userLogin(email, password);
      console.log(response.config);
      console.log(response.status);
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUserName(username);
        setToken(baToken);
        localStorage.setItem("email", email);
        console.log(localStorage.getItem("email"));

        apiClient.interceptors.request.use((config: any) => {
          console.log("intercepting and adding a header");
          config.headers.Authorization = "12345";
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (err) {
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setToken("");
    setUserName(null);
    localStorage.removeItem("email");
  }

  const authStatus = async () => {
    const token = localStorage.getItem("email");
    console.log("token from authStatus is : ", token);
    return token;
  };

  return (
    <>
      <AuthContext.Provider
        value={{ isAuthenticated, authStatus, login, logout, username, token }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
