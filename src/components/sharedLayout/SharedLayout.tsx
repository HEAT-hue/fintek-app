import { Footer } from "../../components";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";

const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export { SharedLayout };
