import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const mutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      toast.success(
        "Your inquiry has been submitted! We'll contact you shortly.",
      );
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions? We're here to help. Reach out and our team will
            respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground">
              Visit us at our branch, call us, or send an email. Our dedicated
              support team is available Monday–Saturday, 9 AM to 6 PM.
            </p>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@flpnidhi.com",
                href: "mailto:info@flpnidhi.com",
              },
              {
                icon: MapPin,
                label: "Address",
                value:
                  "123 Finance Street, Andheri West, Mumbai, Maharashtra 400053",
                href: "#",
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Mon–Sat: 9:00 AM – 6:00 PM",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-card" data-ocid="contact.panel">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Rajesh Kumar"
                      required
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="rajesh@example.com"
                      required
                      data-ocid="contact.email.input"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    data-ocid="contact.phone.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    required
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid="contact.submit.primary_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {mutation.isPending && (
                  <div
                    data-ocid="contact.loading_state"
                    className="text-center text-sm text-muted-foreground"
                  >
                    Submitting your inquiry...
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
