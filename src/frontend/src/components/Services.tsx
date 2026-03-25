import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building2, PiggyBank, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Banknote,
    title: "Personal Loans",
    description:
      "Quick personal loans with minimal documentation for your immediate financial needs — medical, education, travel, and more.",
    badge: "From 10.5% p.a.",
  },
  {
    icon: Building2,
    title: "Business Loans",
    description:
      "Fuel your business growth with flexible business loans designed for MSMEs, startups, and entrepreneurs.",
    badge: "Up to ₹25 Lakhs",
  },
  {
    icon: PiggyBank,
    title: "Fixed Deposits",
    description:
      "Earn attractive interest on your savings with our secure Fixed Deposit schemes — ideal for long-term wealth building.",
    badge: "Up to 9% p.a.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Deposits",
    description:
      "Build a savings habit with our Recurring Deposit plans. Invest small amounts monthly and watch your money grow.",
    badge: "Flexible tenures",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Financial Services
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Comprehensive financial solutions tailored to help you save, grow,
            and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="bg-white h-full hover:shadow-card-hover transition-shadow duration-300 group">
                <CardHeader className="pb-3">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-3 group-hover:bg-green/10 transition-colors">
                    <svc.icon className="h-7 w-7 text-primary group-hover:text-green transition-colors" />
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {svc.title}
                  </CardTitle>
                  <span className="text-xs font-semibold text-green bg-green/10 px-2 py-0.5 rounded-full w-fit">
                    {svc.badge}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
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
