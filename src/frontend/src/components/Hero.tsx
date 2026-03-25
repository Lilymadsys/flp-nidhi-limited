import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onApplyLoan: () => void;
}

export default function Hero({ onApplyLoan }: HeroProps) {
  return (
    <section id="home" className="bg-white overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              Trusted Nidhi / NBFC Company
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-foreground">
              Secure Your Future with{" "}
              <span className="text-primary">Trusted Financial</span> Solutions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              FLP Nidhi Limited is a registered Nidhi / Non-Banking Financial
              Company dedicated to empowering individuals and families through
              flexible loans, safe savings plans, and transparent financial
              services.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onApplyLoan}
                size="lg"
                className="bg-green text-green-foreground hover:bg-green/90 rounded-full px-8 text-base font-semibold shadow-md"
                data-ocid="hero.apply_loan.primary_button"
              >
                Apply for Loan
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 text-base font-semibold"
              >
                <a
                  href="#services"
                  data-ocid="hero.open_savings.secondary_button"
                >
                  Open Savings Account
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                {
                  icon: Users,
                  label: "10,000+ Members",
                  sub: "Trust us with their savings",
                },
                {
                  icon: TrendingUp,
                  label: "₹50 Cr+ Disbursed",
                  sub: "In loans across India",
                },
                {
                  icon: ShieldCheck,
                  label: "100% Secure",
                  sub: "RBI compliant NBFC",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {label}
                    </div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-green/10 rounded-3xl" />
            <img
              src="/assets/generated/hero-family-finance.dim_800x600.jpg"
              alt="Happy family using FLP Nidhi financial services"
              className="relative rounded-2xl w-full h-auto object-cover shadow-card-hover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-3 flex items-center gap-2">
              <div className="p-2 bg-green/10 rounded-lg">
                <ShieldCheck className="h-5 w-5 text-green" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">
                  RBI Registered
                </div>
                <div className="text-xs text-muted-foreground">
                  Nidhi Company
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
