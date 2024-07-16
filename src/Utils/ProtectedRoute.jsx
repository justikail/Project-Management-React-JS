import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ element: Component, redirect, ...rest }) => {
  const isAuthenticated = Cookies.get("PHPSESSID") === "f1c70ccbca78dc142a9cd77eda97d208";
  return isAuthenticated ? <Component {...rest} /> : <Navigate to={redirect} />;
};

export const LoginRedirect = ({ element: Component, redirect, ...rest }) => {
  const isAuthenticated = Cookies.get("PHPSESSID") === "f1c70ccbca78dc142a9cd77eda97d208";
  return isAuthenticated ? <Navigate to={redirect} /> : <Component {...rest} />;
};
