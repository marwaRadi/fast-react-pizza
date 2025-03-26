import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as actionOrder,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order, { loader as loaderOrder } from "./features/order/Order";
import ProtectedRout from "./ui/ProtectedRout";

const route = createBrowserRouter([
  {
    // A Layout wraps around pages and render dynamic content //^ <outLet/>
    element: (
      <ProtectedRout>
        <AppLayout />
      </ProtectedRout>
    ),
    errorElement: <Error />,
    children: [
      {
        // Re-render homePage
        path: "/",
        element: <Home />,
      },
      {
        // when the URL matches this segment
        path: "/menu",
        // it renders this element => (component)
        element: <Menu />,
        // handle Error
        errorElement: <Error />,
        // with this data loaded before rendering
        loader: menuLoader,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: loaderOrder,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionOrder,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
