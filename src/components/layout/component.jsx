import { Header } from "../header/component";
import { Footer } from "../footer/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header imageVariant="Other" />
      {children}
      <Footer />
    </div>
  );
};
