import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Gallery", to: "/gallery" },
  { name: "News", to: "/news" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-950">
          Ceramic
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
                }`}>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white/98 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive ? "bg-slate-100 text-slate-950" : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
