import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-extrabold text-green">FLP</span>
              <span className="text-lg font-semibold text-white ml-1">
                Nidhi Limited
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A trusted Nidhi / Non-Banking Financial Company providing
              affordable loans and secure savings solutions to families across
              India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: SiFacebook, href: "#", label: "Facebook" },
                { icon: SiInstagram, href: "#", label: "Instagram" },
                { icon: SiX, href: "#", label: "X" },
                { icon: SiLinkedin, href: "#", label: "LinkedIn" },
                { icon: SiYoutube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-green/80 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Benefits", href: "#benefits" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Personal Loans",
                "Business Loans",
                "Home Loans",
                "Fixed Deposits",
                "Recurring Deposits",
                "Savings Accounts",
              ].map((svc) => (
                <li key={svc}>
                  <span className="text-sm text-primary-foreground/70">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/70">
              Subscribe for the latest offers and financial tips.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm"
                data-ocid="footer.newsletter.input"
              />
              <Button
                type="submit"
                className="bg-green text-green-foreground hover:bg-green/90 shrink-0"
                data-ocid="footer.newsletter.primary_button"
              >
                Join
              </Button>
            </form>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>📞 +91 98765 43210</p>
              <p>✉ info@flpnidhi.com</p>
              <p>📍 123 Finance Street, Mumbai, MH 400053</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-primary-foreground/50">
          <span>© {year} FLP Nidhi Limited. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
