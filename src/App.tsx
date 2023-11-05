import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

// 여기서는 라우터를 만들어주자

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => {
      console.log("router loaded");
      return "123";
    },
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <HomePage></HomePage>
      </div>
    </RouterProvider>
  );
}

export default App;
