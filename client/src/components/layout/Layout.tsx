import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-deep-dark dark:text-slate-100 transition-colors ease-out duration-300">
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="p-6 w-full max-w-screen-xl mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
