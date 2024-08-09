import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfull");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Error : ", err.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
