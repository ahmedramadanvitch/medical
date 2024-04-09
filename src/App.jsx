/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Faqs from "./Pages/Faqs/Faqs";
import ContactUs from "./Pages/Contact/ContactUs";
import Cart from "./Pages/Cart/Cart";
import Collection from "./Pages/Collection/Collection";
import LayOut from "./Components/LayOut/LayOut";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import VerifyCode from "./Pages/VerifyCode/VerifyCode";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Fav from "./Pages/Fav/Fav";

function App() {
  let { setIsUser } = useContext(UserContext);

  useEffect(() => {
    // if local storage not empty and it have token
    if (localStorage.getItem("userToken")) {
      setIsUser(localStorage.getItem("userToken"));
    }
  }, []);

  const routes = createHashRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/collection",
          element: (
            <ProtectedRoute>
              <Collection />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/faqs",
          element: (
            <ProtectedRoute>
              <Faqs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/contact",
          element: (
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/fav",
          element: (
            <ProtectedRoute>
              <Fav />
            </ProtectedRoute>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgetPassword", element: <ForgetPassword /> },
        { path: "/verify-code", element: <VerifyCode /> },
        { path: "/reset-password", element: <ResetPassword /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
