// src/pages/ProfilePage.jsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function ProfilePage() {
  return (
    <>
    <div className="w-full bg-background flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-left">
          <h1 className="text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Account
          </h1>
        </div>

        {/* Account Details Form */}
        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Account Details
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="first-name">First Name <span className="text-red-500">*</span></Label>
                <Input id="first-name" type="text" defaultValue="John" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name <span className="text-red-500">*</span></Label>
                <Input id="last-name" type="text" defaultValue="Doe" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" required className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>

            <Separator className="my-8" />

            <h3 className="text-xl pt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Password change
            </h3>
            <div>
              <Label htmlFor="current-password">Current password (leave blank to leave unchanged)</Label>
              <Input id="current-password" type="password" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>
            <div>
              <Label htmlFor="new-password">New password (leave blank to leave unchanged)</Label>
              <Input id="new-password" type="password" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>

            <div>
              <Button type="submit" className="bg-black text-white h-12 px-8 text-md hover:bg-gray-800">
                Save changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <StayInspired />
      <SectionDivider />
    </>
  );
}