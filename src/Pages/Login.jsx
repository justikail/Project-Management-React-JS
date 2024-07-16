import { useState } from "react";
import { supabase } from "../Utils/createClient";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const hashedPassword = CryptoJS.MD5(password).toString();
    const { data, error } = await supabase.from("user").select("*").eq("username", username).eq("password", hashedPassword).single();

    if (error || !data) {
      toast.error("Login Failed!");
    } else {
      Cookies.set("PHPSESSID", "f1c70ccbca78dc142a9cd77eda97d208", { expires: 1 });
      toast.success("Login Success!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Secret Login</title>
      </Helmet>

      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2 style={{ textAlign: "center", borderBottom: "1px solid #101010", paddingBottom: 10, marginBottom: 10, textTransform: "uppercase" }}>Login</h2>
          <div className="form-group">
            <label className="label-login" htmlFor="username">
              Username
            </label>
            <input className="input-login" type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="label-login" htmlFor="password">
              Password
            </label>
            <input className="input-login" type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <i className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"}`} onClick={() => setShowPassword(!showPassword)} />
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
