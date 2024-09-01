import Navbar from "../components/Navbar";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="container">{children}</main>
      </div>
    </>
  );
}
