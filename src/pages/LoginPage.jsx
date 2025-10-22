// src/pages/LoginPage.jsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Link } from "react-router-dom";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function LoginPage() {
  return (
    <>
      <div className="w-full bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200">
          <div className="mb-8 text-left">
            <h1 className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Login
            </h1>
            <p className="text-muted-foreground">
              Manage your account and see your orders
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <Label htmlFor="email">Username or email address <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                required
                className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
            <div>
              <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
              <Input
                id="password"
                type="password"
                required
                className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="font-normal text-sm">Remember me</Label>
              </div>
              <Link to="/lost-password" className="text-sm text-blue-600 hover:underline">
                Lost your password?
              </Link>
            </div>
            <div>
              <Button type="submit" className="w-full bg-black text-white h-12 text-md hover:bg-gray-800">
                Log in
              </Button>
            </div>
            <p className="!mt-8 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-blue-600 hover:underline">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
      
      {/* Moved this section outside to ensure it renders below the form */}
      
      <StayInspired />
      <SectionDivider />
    </>
  );
}