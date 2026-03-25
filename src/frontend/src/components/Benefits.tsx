import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, FileText, Lock, Percent } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Easy Application Process",
    description:
      "Apply online or visit our branch. Our simplified process ensures you spend less time on paperwork and more time on what matters.",
  },
  {
    icon: FileText,
    title: "Minimal Documentation",
    description:
      "We require only basic KYC documents — Aadhaar, PAN, and income proof. No lengthy paperwork or complicated procedures.",
  },
  {
    icon: Percent,
    title: "Competitive Interest Rates",
    description:
      "Enjoy some of the most competitive loan and deposit rates in the industry, making your money work harder for you.",
  },
  {
    icon: Lock,
    title: "Secure Savings Options",
    description:
      "Your savings are 100% protected under RBI-compliant guidelines. Invest with confidence knowing your money is safe.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose FLP Nidhi Limited?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine trust, technology, and transparency to deliver a truly
            superior financial experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`benefits.item.${i + 1}`}
            >
              <Card className="bg-white h-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-green/10 transition-colors">
                    <b.icon className="h-7 w-7 text-primary group-hover:text-green transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
