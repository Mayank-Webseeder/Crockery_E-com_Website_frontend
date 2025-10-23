import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing up with", { firstName, lastName, email, password });
    login(email, password);
    navigate('/');
  };

  return (
    <div className="max-w-md w-full bg-background p-8 lg:p-12 rounded-lg shadow-lg border border-gray-200">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Create an Account
        </h1>
        <p className="text-muted-foreground">
          Get started with your new account.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first-name">First Name <span className="text-red-500">*</span></Label>
            <Input id="first-name" type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name <span className="text-red-500">*</span></Label>
            <Input id="last-name" type="text" required value={lastName} onChange={e => setLastName(e.target.value)} className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
          <Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
        </div>
        <div>
          <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
          <Input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
        </div>
        <div>
          <Button type="submit" className="w-full bg-black text-white h-12 text-md hover:bg-gray-800">
            Create Account
          </Button>
        </div>
        <p className="!mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}