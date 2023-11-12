import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import BoardPage from "./pages/BoardPage";
import BoardDetailPage from "./pages/BoardDetailPage";
// 여기서는 라우터를 만들어주자

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/board"} element={<BoardPage />} />
        <Route path={"/board/:bno"} element={<BoardDetailPage  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
