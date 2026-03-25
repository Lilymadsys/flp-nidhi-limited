import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    initials: "RK",
    rating: 5,
    quote:
      "FLP Nidhi helped me get a personal loan within 3 days to cover my daughter's college fees. The process was smooth, transparent, and the staff was incredibly helpful. I highly recommend them!",
  },
  {
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    initials: "PS",
    rating: 5,
    quote:
      "I've been investing in their Fixed Deposit scheme for 2 years now. The returns are excellent and I feel completely secure. Their customer service is always responsive and professional.",
  },
  {
    name: "Mohammed Iqbal",
    location: "Nashik, Maharashtra",
    initials: "MI",
    rating: 5,
    quote:
      "I took a business loan to expand my shop. FLP Nidhi made it possible with minimal hassle. Today my business is thriving. Thank you for believing in small entrepreneurs!",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Member Testimonials
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from our members about their experience with FLP Nidhi Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Card className="bg-white h-full shadow-card hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {STARS.slice(0, t.rating).map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
