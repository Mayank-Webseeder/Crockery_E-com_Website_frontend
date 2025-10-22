// src/pages/SignUpPage.jsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link } from "react-router-dom";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function SignUpPage() {
  return (
    <>
    <div className="w-full bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200">
        <div className="mb-8 text-left">
          <h1 className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Create an Account
          </h1>
          <p className="text-muted-foreground">
            Get started by creating your new account.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name <span className="text-red-500">*</span></Label>
              <Input id="first-name" type="text" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name <span className="text-red-500">*</span></Label>
              <Input id="last-name" type="text" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
            <Input id="email" type="email" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
          </div>
          <div>
            <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
            <Input id="password" type="password" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
          </div>
          <div>
            <Button type="submit" className="w-full bg-black text-white h-12 text-md hover:bg-gray-800">
              Create Account
            </Button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>  
    </div>
    
      <StayInspired />
      <SectionDivider />
      </>
  );
}