import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function LogOut(props) {
  const navigate = useNavigate();

  const deleteCookies = () => {
    Cookies.remove("PHPSESSID");
    toast.success("Logout Success!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <button onClick={deleteCookies} style={props.styleButton} title="logOut">
      <i
        className="uil uil-signout"
        style={{
          fontSize: 25,
        }}
      />
    </button>
  );
}
