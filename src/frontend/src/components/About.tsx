import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Heart, Target } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-green font-semibold text-sm uppercase tracking-wider">
              <Award className="h-4 w-4" /> About FLP Nidhi Limited
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Building Financial Security for Every Indian Family
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FLP Nidhi Limited is a registered Nidhi Company under the
              Companies Act, 2013, and operates as a Non-Banking Financial
              Company (NBFC) regulated by RBI guidelines. We were founded with
              the mission of providing accessible, affordable, and transparent
              financial services to individuals and small businesses across
              India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in the financial sector, we have
              served more than 10,000 members with loan disbursements exceeding
              ₹50 crore. Our commitment to transparency, ethical practices, and
              customer satisfaction sets us apart.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { value: "10K+", label: "Happy Members" },
                { value: "₹50 Cr+", label: "Loans Disbursed" },
                { value: "10+", label: "Years Experience" },
                { value: "99%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-secondary rounded-xl min-w-[80px]"
                >
                  <div className="text-xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: mission/vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "text-primary",
                bg: "bg-primary/10",
                text: "To provide accessible, transparent, and customer-centric financial services that empower every Indian to achieve their financial goals.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "text-green",
                bg: "bg-green/10",
                text: "To become India's most trusted Nidhi Company, known for financial inclusion, integrity, and innovation in financial services.",
              },
              {
                icon: Heart,
                title: "Our Values",
                color: "text-primary",
                bg: "bg-primary/10",
                text: "Trust, Transparency, Customer First. We believe in ethical practices, clear communication, and putting our members' interests above all else.",
              },
              {
                icon: Award,
                title: "Our Promise",
                color: "text-green",
                bg: "bg-green/10",
                text: "Quick approvals, fair rates, and a team that's always there for you. Your financial security is our responsibility.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="shadow-card border-border hover:shadow-card-hover transition-shadow"
              >
                <CardContent className="p-5 space-y-3">
                  <div className={`p-2 ${item.bg} rounded-lg w-fit`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
