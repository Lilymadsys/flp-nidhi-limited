import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, LogIn, ShieldCheck } from "lucide-react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const { login, loginStatus, identity, clear } = useInternetIdentity();
  const isLoggingIn = loginStatus === "logging-in";
  const isLoggedIn = loginStatus === "success" && !!identity;

  const handleLogin = async () => {
    await login();
    if (loginStatus === "success") onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-sm text-center"
        data-ocid="login_modal.dialog"
      >
        <DialogHeader>
          <div className="flex justify-center mb-3">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold">Member Login</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isLoggedIn
              ? `Logged in as: ${identity?.getPrincipal().toString().slice(0, 16)}...`
              : "Sign in securely to access your FLP Nidhi account and manage your loans and savings."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          {isLoggedIn ? (
            <>
              <p className="text-sm text-green font-semibold">
                ✓ Successfully logged in
              </p>
              <Button
                onClick={() => {
                  clear();
                  onOpenChange(false);
                }}
                variant="outline"
                className="w-full"
                data-ocid="login_modal.logout.button"
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              data-ocid="login_modal.login.primary_button"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Signing
                  in...
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" /> Sign In Securely
                </>
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="w-full text-muted-foreground"
            data-ocid="login_modal.close.close_button"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
