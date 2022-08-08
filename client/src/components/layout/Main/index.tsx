/** This is the main layout file. All pages will inherit from this layout */

import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
