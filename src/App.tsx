import "./App.css";
import AuthProvider, { useAuth } from "./components/security/AuthContext";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import BoardPage from "./pages/BoardPage";
import BoardDetailPage from "./pages/BoardDetailPage";

// 여기서는 라우터를 만들어주자

const TestUnit = ({ children }: any) => {
  const email = localStorage.getItem("email");
  console.log("email is : " + email);
  if (email) return children;
  return <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route
              path={"/board"}
              element={
                <TestUnit>
                  <BoardPage />
                </TestUnit>
              }
            />
            <Route
              path={"/board/:bno"}
              element={
                <TestUnit>
                  <BoardDetailPage />
                </TestUnit>
              }
            >
              <Route index element={<h2>Detailed Info goes here</h2>} />
              <Route
                path={"detail2"}
                element={<h2>Detailed Info2 goes here</h2>}
              />
              <Route
                path={"detail3"}
                element={<h2>Detailed Info3 goes here</h2>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
