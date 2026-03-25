import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const loanSteps = [
  {
    step: 1,
    title: "Fill Application",
    desc: "Complete our simple online form with basic personal and financial details.",
  },
  {
    step: 2,
    title: "Submit Documents",
    desc: "Upload Aadhaar, PAN, income proof, and address proof digitally.",
  },
  {
    step: 3,
    title: "Verification",
    desc: "Our team verifies your application within 24–48 hours.",
  },
  {
    step: 4,
    title: "Loan Disbursal",
    desc: "Funds transferred directly to your bank account upon approval.",
  },
];

const savingsSteps = [
  {
    step: 1,
    title: "Choose a Plan",
    desc: "Select from FD or RD schemes based on your savings goal.",
  },
  {
    step: 2,
    title: "Create Account",
    desc: "Open your account with minimal KYC documentation.",
  },
  {
    step: 3,
    title: "Make Deposit",
    desc: "Deposit your initial amount online or at our branch.",
  },
  {
    step: 4,
    title: "Earn Returns",
    desc: "Watch your savings grow with competitive interest rates.",
  },
];

function StepList({ steps }: { steps: typeof loanSteps }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
      <div className="space-y-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
              {s.step}
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-foreground text-sm">{s.title}</h4>
              <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface HowItWorksProps {
  onApplyLoan: () => void;
}

export default function HowItWorks({ onApplyLoan }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Getting started with FLP Nidhi Limited is simple and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-primary/10 rounded-lg">
                <ArrowRight className="h-5 w-5 text-primary" />
              </span>
              Loan Application Process
            </h3>
            <StepList steps={loanSteps} />
          </div>

          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-green/10 rounded-lg">
                <ArrowRight className="h-5 w-5 text-green" />
              </span>
              Open a Savings Account
            </h3>
            <StepList steps={savingsSteps} />
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            onClick={onApplyLoan}
            size="lg"
            className="bg-green text-green-foreground hover:bg-green/90 rounded-full px-10 font-semibold"
            data-ocid="how_it_works.apply_loan.primary_button"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
