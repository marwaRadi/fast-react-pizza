import { useSelector } from "react-redux";
import { getActiveUser } from "../user/userSlice";

function User() {
  const userName = useSelector(getActiveUser);
  if (!userName) return null;
  return <p>{userName}</p>;
}

export default User;
