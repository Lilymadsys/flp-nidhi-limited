import { useMutation } from "@tanstack/react-query";
import type { LoanType } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
  });
}

export function useSubmitLoanApplication() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      loanType: LoanType;
      amount: bigint;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitLoanApplication(
        data.name,
        data.email,
        data.phone,
        data.loanType,
        data.amount,
        data.message,
      );
    },
  });
}
