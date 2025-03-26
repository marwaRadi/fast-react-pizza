import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/User";
function Header() {
  return (
    <>
      <header className="bg-yellow-400 px-6 py-3 flex justify-between items-center font-pizza">
        <Link className="tracking-[5px] uppercase " to={"/"}>
          Fast React Pizza co.
        </Link>
        <SearchOrder />
        <User />
      </header>
    </>
  );
}

export default Header;
