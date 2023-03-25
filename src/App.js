import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import ShimmerUI from "./components/shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";

const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));
const ApplayoutComponent = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col min-h-full font-serif">
          <Header></Header>
          <Outlet className="mb-auto" />
          <Footer></Footer>
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayoutComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About></About>
          </Suspense>
        ),
        children: [
          {
            path: "profile", //Don't use '/' here
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body className="container px-4 py-10 mx-auto" />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerUI></ShimmerUI>}>
            <Cart></Cart>
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
