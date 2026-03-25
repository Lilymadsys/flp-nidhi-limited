import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLoanApplication } from "@/hooks/useQueries";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { LoanType } from "../backend.d";

interface LoanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LOAN_TYPES = [
  { value: LoanType.personal, label: "Personal Loan" },
  { value: LoanType.business, label: "Business Loan" },
  { value: LoanType.home, label: "Home Loan" },
  { value: LoanType.education, label: "Education Loan" },
  { value: LoanType.auto, label: "Auto Loan" },
  { value: LoanType.other, label: "Other" },
];

export default function LoanModal({ open, onOpenChange }: LoanModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: LoanType.personal,
    amount: "",
    message: "",
  });
  const mutation = useSubmitLoanApplication();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({
        ...form,
        amount: BigInt(Math.round(Number(form.amount))),
      });
      toast.success(
        "Loan application submitted! Our team will contact you within 24 hours.",
      );
      onOpenChange(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        loanType: LoanType.personal,
        amount: "",
        message: "",
      });
    } catch {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg" data-ocid="loan_modal.dialog">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Apply for a Loan
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details below and our team will get back to you within
            24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="loan-name">Full Name *</Label>
              <Input
                id="loan-name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Rajesh Kumar"
                required
                data-ocid="loan_modal.name.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="loan-email">Email *</Label>
              <Input
                id="loan-email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="rajesh@example.com"
                required
                data-ocid="loan_modal.email.input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="loan-phone">Phone Number *</Label>
              <Input
                id="loan-phone"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                placeholder="+91 98765 43210"
                required
                data-ocid="loan_modal.phone.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Loan Type *</Label>
              <Select
                value={form.loanType}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, loanType: v as LoanType }))
                }
              >
                <SelectTrigger data-ocid="loan_modal.loan_type.select">
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  {LOAN_TYPES.map((lt) => (
                    <SelectItem key={lt.value} value={lt.value}>
                      {lt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="loan-amount">Loan Amount (₹) *</Label>
            <Input
              id="loan-amount"
              type="number"
              min="1000"
              value={form.amount}
              onChange={(e) =>
                setForm((p) => ({ ...p, amount: e.target.value }))
              }
              placeholder="e.g. 500000"
              required
              data-ocid="loan_modal.amount.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="loan-message">Additional Details</Label>
            <Textarea
              id="loan-message"
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              placeholder="Tell us about the purpose of the loan..."
              rows={3}
              data-ocid="loan_modal.message.textarea"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-ocid="loan_modal.cancel.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="flex-1 bg-green text-green-foreground hover:bg-green/90"
              data-ocid="loan_modal.submit.primary_button"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
          {mutation.isPending && <div data-ocid="loan_modal.loading_state" />}
          {mutation.isError && (
            <div
              data-ocid="loan_modal.error_state"
              className="text-destructive text-sm text-center"
            >
              Something went wrong. Please try again.
            </div>
          )}
          {mutation.isSuccess && <div data-ocid="loan_modal.success_state" />}
        </form>
      </DialogContent>
    </Dialog>
  );
}
