// src/pages/ContactPage.jsx
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import { Plus, Minus } from "lucide-react";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";
import { CountryCodePicker } from '../components/CountryCodePicker'; // Import the new component

export function ContactPage() {
  const [openDepartment, setOpenDepartment] = useState("general");
  const [phoneNumber, setPhoneNumber] = useState("+91 ");
  const toggleDepartment = (dept) => {
    setOpenDepartment(openDepartment === dept ? null : dept);
  };
  const handleCountrySelect = (country) => {
      setPhoneNumber(country.dial_code + ' ');
    };

  return (
    <div className="py-12 lg:py-16">
      {/* Hero Section with Images and Heading */}
      <div className="w-full px-4 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column - Images (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwMzU2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMHNwYWNlfGVufDF8fHx8MTc2MDM1NjY4NHww&ixlib.rb-4.1.0&q=80&w=1080"
                alt="Showroom 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Heading and Info (7 columns) */}
          <div className="lg:col-span-7">
            <h1 className="mb-8 text-3xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 400, fontSize: "48px" }}>
              Questions, requests, or just a hello, feel free to reach out.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="mb-2 text-xl">Location</h3>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>16, Bvk Iyengar Road</p>
                  <p>Bangalore, Karnataka</p>
                  <p>India</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl">Hours</h3>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>Monday – Tuesday</p>
                  <p>10:30am – 7:00pm</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl">Phone</h3>
                <div className="text-muted-foreground text-sm">
                  <p>+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Departments */}
          <div className="bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-2xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 400, fontSize: "37px" }}>
              Departments
            </h2>
            <div className="space-y-0 border-t border-border">
              <Collapsible open={openDepartment === "general"} onOpenChange={() => toggleDepartment("general")}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-lg">General Inquiries</span>
                  {openDepartment === "general" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 pb-6 border-b border-border">
                  <p className="text-muted-foreground mb-3 text-sm">
                    Got a question about a product, need help with an order, or just want to reach out?
                  </p>
                  <p className="mb-1 text-sm">
                    We're here to help. Reach us at{" "}
                    <a href="mailto:info@tanariri.com" className="text-[#d87f4a] hover:underline">info@tanariri.com</a>
                  </p>
                </CollapsibleContent>
              </Collapsible>
              {/* Trade & Wholesale */}
              <Collapsible
                open={openDepartment === "trade"}
                onOpenChange={() => toggleDepartment("trade")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-lg">Trade & Wholesale</span>
                  {openDepartment === "trade" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 pb-6 border-b border-border text-sm">
                  <p className="text-muted-foreground mb-3">
                    Interested in wholesale or trade partnerships? We'd love to hear from you.
                  </p>
                  <p>
                    Contact us at{" "}
                    <a
                      href="mailto:trade@tanariri.com"
                      className="text-[#d87f4a] hover:underline"
                    >
                      trade@tanariri.com
                    </a>
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Press & Media */}
              <Collapsible
                open={openDepartment === "press"}
                onOpenChange={() => toggleDepartment("press")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-lg">Press & Media</span>
                  {openDepartment === "press" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 pb-6 border-b border-border text-sm">
                  <p className="text-muted-foreground mb-3">
                    For press inquiries, interviews, or media assets, please reach out to our press team.
                  </p>
                  <p>
                    Email us at{" "}
                    <a
                      href="mailto:press@tanariri.com"
                      className="text-[#d87f4a] hover:underline"
                    >
                      press@tanariri.com
                    </a>
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Showrooms */}
              <Collapsible
                open={openDepartment === "showrooms"}
                onOpenChange={() => toggleDepartment("showrooms")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-lg">Showrooms</span>
                  {openDepartment === "showrooms" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 pb-6 border-b border-border text-sm">
                  <p className="text-muted-foreground mb-3">
                    Visit our showrooms to experience our collections in person. Book an appointment today.
                  </p>
                  <p>
                    Contact{" "}
                    <a
                      href="mailto:showroom@tanariri.com"
                      className="text-[#d87f4a] hover:underline"
                    >
                      showroom@tanariri.com
                    </a>
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-2xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 400, fontSize: "32px" }}>
              Let's hear from you
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Your Name" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Your Last Name" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                  </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="youremail@example.com" className="mt-1 h-12 bg-gray-50 border-gray-200 focus:bg-white" />
              </div>

              {/* ✨ Phone Input with Country Code Picker */}
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[120px]">
                    <CountryCodePicker onSelect={handleCountrySelect} />
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white flex-1"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="mt-1 bg-gray-50 border-gray-200 focus:bg-white resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="privacy" className="mt-1" />
                <Label htmlFor="privacy" className="text-xs cursor-pointer leading-relaxed text-muted-foreground">
                  I agree to the Privacy Policy and consent to be contacted by TanaRiri regarding my inquiry. *
                </Label>
              </div>
              
              <div>
                <Button type="submit" className="bg-black text-white hover:bg-black/90 h-12 px-8 text-md">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SectionDivider />
      <StayInspired />
      <SectionDivider />
    </div>
  );
}