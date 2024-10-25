/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // it mean I am not login
  if (!localStorage.getItem("userToken")) {
    return <Navigate to={"/register"}></Navigate>;
  } else {
    return children;
  }
}
