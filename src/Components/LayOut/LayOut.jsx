import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function LayOut() {
  return (
    <>
      <div
        className="min-h-[100vh] grid"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <NavBar />
        <Outlet />
        <ProtectedRoute>
          <Footer />
        </ProtectedRoute>
      </div>
    </>
  );
}
