import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header imageVariant="Other" />
      <Outlet />
      <Footer />
    </div>
  );
};
