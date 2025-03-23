import { useNavigate } from "react-router-dom";
import { logout } from "../api/user";

export function LogOut() {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
    navigate("/Sign_In");
  };

  return (
    <>
      <div
        className="w-[100px] border-2 px-[20px] py-[10px] m-[auto] my-[50px]"
        onClick={handleLogout}
      >
        Logout
      </div>
    </>
  );
}
