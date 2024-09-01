import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-wrapper">
        <div>
          <Navbar />
          <main className="container">{children}</main>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
