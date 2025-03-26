import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../features/cart/cartSlice";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div >
      {isLoading && <Loader />}
      <Header />

      <main className="max-w-3xl mx-auto w-full">
        <Outlet />
      </main>
        <CartOverview />
   
    </div>
  );
}

export default AppLayout;
