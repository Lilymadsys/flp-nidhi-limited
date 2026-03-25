import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LoanModal from "./components/LoanModal";
import LoginModal from "./components/LoginModal";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const queryClient = new QueryClient();

function AppContent() {
  const [loanModalOpen, setLoanModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header
        onApplyNow={() => setLoanModalOpen(true)}
        onLogin={() => setLoginModalOpen(true)}
      />
      <main>
        <Hero onApplyLoan={() => setLoanModalOpen(true)} />
        <Services />
        <About />
        <Benefits />
        <HowItWorks onApplyLoan={() => setLoanModalOpen(true)} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <LoanModal open={loanModalOpen} onOpenChange={setLoanModalOpen} />
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
