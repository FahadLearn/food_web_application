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
        className="mt-[10px] bg-amber-500 mx-auto outline-none text-center text-white font-semibold rounded-[30px] bg-[#ECECEC] text-[20px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
        onClick={handleLogout}
      >
        Logout
      </div>
    </>
  );
}
