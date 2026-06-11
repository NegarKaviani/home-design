import { type ReactNode } from "react";
import { Navbar } from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main className="pt-20">
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
