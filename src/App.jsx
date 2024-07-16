import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import { ProtectedRoute } from "./Utils/ProtectedRoute";
import { LoginRedirect } from "./Utils/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginRedirect element={Login} redirect="/dashboard" />} />
          <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} redirect="/" />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
