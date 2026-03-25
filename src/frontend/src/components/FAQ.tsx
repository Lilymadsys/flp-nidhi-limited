import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "what-is-nidhi",
    q: "What is a Nidhi Company and how is FLP Nidhi Limited regulated?",
    a: "A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA). FLP Nidhi Limited operates strictly within RBI and MCA guidelines, ensuring your money is safe and transactions are legally compliant.",
  },
  {
    id: "loan-eligibility",
    q: "Who is eligible to apply for a loan?",
    a: "Any Indian citizen between 21–60 years of age with a stable income source can apply. Salaried employees, self-employed individuals, and small business owners are all welcome. Basic KYC documents (Aadhaar, PAN) and income proof are required.",
  },
  {
    id: "loan-interest-rates",
    q: "What are the interest rates on loans?",
    a: "Personal loans start from 10.5% per annum and business loans from 12% per annum. Rates vary based on loan amount, tenure, and credit profile. We always disclose all rates and charges upfront with no hidden fees.",
  },
  {
    id: "fd-interest-rates",
    q: "What interest rates do Fixed Deposits earn?",
    a: "Our Fixed Deposit schemes offer up to 9% per annum depending on the tenure. Short-term FDs (1 year) earn 7.5% p.a., while long-term FDs (3+ years) can earn up to 9% p.a. Interest can be paid monthly, quarterly, or at maturity.",
  },
  {
    id: "required-documents",
    q: "What documents are required to open an account or apply for a loan?",
    a: "You need: (1) Identity proof — Aadhaar card and PAN card. (2) Address proof — utility bill or bank statement. (3) Income proof — salary slips or bank statements for 3 months. (4) Passport-sized photographs. All documents can be submitted digitally.",
  },
  {
    id: "approval-time",
    q: "How quickly can I get my loan approved?",
    a: "Once you submit complete documents, our team reviews your application within 24–48 working hours. For eligible applicants with all documents in order, loan disbursal happens within 3–5 working days directly to your bank account.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers. Reach out to us if you need more
            help.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-3"
          data-ocid="faq.panel"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-secondary rounded-xl border-0 px-6"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
