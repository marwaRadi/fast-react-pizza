import { useSelector } from "react-redux";
import { getActiveUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRout({ children }) {
  const user = useSelector(getActiveUser);
  const navigate = useNavigate();
  // console.log(user)
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return children;
}

export default ProtectedRout;
