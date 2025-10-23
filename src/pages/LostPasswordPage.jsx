import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function LostPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Password reset for", email);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md w-full bg-background p-8 lg:p-12 rounded-lg shadow-lg border border-gray-200 text-left">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Reset Password
        </h1>
        <p className="text-muted-foreground">
          We'll send a recovery link to your email.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center">
            <p className="text-gray-600 mb-6">
                If an account with that email exists, we've sent a link to reset your password. Please check your inbox.
            </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleReset}>
          <div>
            <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
          <div>
            <Button type="submit" className="w-full bg-black text-white h-12 text-md hover:bg-gray-800">
              Send Recovery Link
            </Button>
          </div>
        </form>
      )}

      <div className="text-center mt-6">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
    </div>
  );
}