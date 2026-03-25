import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  onApplyNow: () => void;
  onLogin: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onApplyNow, onLogin }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5">
        <div className="container flex justify-between items-center">
          <span>
            Trusted Nidhi Company | NBFC Registered | Safe &amp; Secure
          </span>
          <button
            type="button"
            onClick={onLogin}
            className="flex items-center gap-1 hover:text-accent transition-colors"
            data-ocid="header.login_button"
          >
            <LogIn className="h-3 w-3" />
            Login
          </button>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl font-extrabold text-green">FLP</span>
            <span className="text-lg font-semibold text-primary">
              Nidhi Limited
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                data-ocid={`header.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              onClick={onApplyNow}
              className="bg-green text-green-foreground hover:bg-green/90 rounded-full px-5"
              data-ocid="header.apply_now.primary_button"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden p-2"
                aria-label="Open menu"
                data-ocid="header.mobile_menu.toggle"
              >
                <Menu className="h-6 w-6 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 p-0"
              data-ocid="header.mobile_menu.sheet"
            >
              <div className="bg-primary p-4 flex items-center justify-between">
                <span className="text-white font-bold text-lg">
                  FLP Nidhi Limited
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-2 text-sm font-medium text-foreground hover:text-primary border-b border-border last:border-0"
                    data-ocid={`header.mobile.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    onClick={() => {
                      onApplyNow();
                      setMobileOpen(false);
                    }}
                    className="bg-green text-green-foreground hover:bg-green/90 w-full"
                    data-ocid="header.mobile.apply_now.primary_button"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      onLogin();
                      setMobileOpen(false);
                    }}
                    className="w-full"
                    data-ocid="header.mobile.login.button"
                  >
                    <LogIn className="h-4 w-4 mr-2" /> Login
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
