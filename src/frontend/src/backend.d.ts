import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LoanApplication {
    name: string;
    email: string;
    loanType: LoanType;
    message: string;
    timestamp: Time;
    phone: string;
    amount: bigint;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export enum LoanType {
    other = "other",
    auto = "auto",
    home = "home",
    education = "education",
    personal = "personal",
    business = "business"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllLoanApplications(): Promise<Array<LoanApplication>>;
    getCallerUserRole(): Promise<UserRole>;
    getContactSubmission(id: bigint): Promise<ContactSubmission>;
    getContactSubmissionCount(): Promise<bigint>;
    getLoanApplication(id: bigint): Promise<LoanApplication>;
    getLoanApplicationCountByType(loanType: LoanType): Promise<bigint>;
    getLoanApplicationsByEmail(email: string): Promise<Array<LoanApplication>>;
    isCallerAdmin(): Promise<boolean>;
    searchContactSubmissionsByName(name: string): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<{
        id: bigint;
        timestamp: Time;
    }>;
    submitLoanApplication(name: string, email: string, phone: string, loanType: LoanType, amount: bigint, message: string): Promise<{
        id: bigint;
        timestamp: Time;
    }>;
}
