import HomeHeading from "./HomeHeading";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import { Button } from "../components/buttons";
function Home() {
  const activeUser = useSelector((store) => store.user.userName);

  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <HomeHeading />
      {activeUser ? (
        <Button to={"/menu"}>continue ordering, {activeUser}</Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
