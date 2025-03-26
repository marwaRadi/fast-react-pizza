import { useState } from "react";
import Input from "../../components/Input";
import { Button } from "../../components/buttons";
import { useDispatch } from "react-redux";
import { setUserName } from "./userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(setUserName(username));
    setUsername(null);
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-sm md:text-base mb-4 "
    >
      <p className="text-stone- mb-4">
        👋 Welcome! Please start by telling us your name:
      </p>

      {/* <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" outline-none bg-stone-50 border  border-stone-200 w-72 p-4 md:py-2 rounded-full focus:ring-yellow-400 focus:ring-2 transition-all duration-100 transition-discrete  ease-in "
      /> */}

          <Input
            placeholder="Your full name"
            value={username}
            setValue={setUsername}
          />
          {username !== "" && (
            <div className="mt-4">
              <Button>start ordering</Button>
            </div>
          )}
    </form>
  );
}

export default CreateUser;
