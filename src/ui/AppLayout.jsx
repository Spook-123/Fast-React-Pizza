import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  // able to see whether the page is idle,loading or submitting
  // Give you the state of the page on navigation object
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* <h1>Content</h1> */}
          {/* Renders the child route's element, if there is one.  According to the App.jsx createBrowserRoute*/}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
