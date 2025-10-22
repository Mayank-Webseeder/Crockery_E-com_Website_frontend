// src/pages/LostPasswordPage.jsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function LostPasswordPage() {
  return (
    <>
    <div className="w-full bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200 text-left">
        <div className="mb-8">
          <h1 className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reset password
          </h1>
          <p className="text-muted-foreground">
            Recover your lost password
          </p>
        </div>
        <p className="text-gray-600 mb-6">
          Lost your password? <br />Please enter your username or email address. You will receive a link to create a new password via email.
        </p>
        <form className="space-y-6">
          <div>
            <Label htmlFor="email">Username or email <span className="text-red-500">*</span></Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
          <div>
            <Button type="submit" className="w-full bg-black text-white h-12 text-md hover:bg-gray-800">
              Reset password
            </Button>
            <br />
          </div>
        </form>
        <div className="text-center">
          <br />
            <Link to="/login" className="mt-8 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Login
            </Link>
        </div>
      </div>
      </div>
    
      <StayInspired />
      <SectionDivider />
    </>
  );
}