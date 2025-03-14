import { useNavigate } from "react-router-dom";

export function LogOut() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include", // ✅ Required for cookies
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      console.log("Logout successful:", data);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
    navigate("/Sign_IN"); // ✅ Redirect
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
