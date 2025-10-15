import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Plus, Minus } from "lucide-react";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function ContactPage() {
  const [openDepartment, setOpenDepartment] = useState<string | null>("general");
  const [selectedRegion, setSelectedRegion] = useState("europe");

  const toggleDepartment = (dept: string) => {
    setOpenDepartment(openDepartment === dept ? null : dept);
  };

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section with Images and Heading */}
      <div className="w-full px-8 lg:px-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Images (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {/* Short image */}
            <div className="aspect-[3/4] overflow-hidden mt-16">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwMzU2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tall image */}
            <div className="aspect-[3/5] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMHNwYWNlfGVufDF8fHx8MTc2MDM1NjY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Heading and Info (7 columns) */}
          <div className="lg:col-span-7">
            <h1 className="mb-12">
              Questions, requests, or just a hello, feel free to reach out.
            </h1>

            {/* Info Table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="mb-4">Location</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Pilestraede 45, 1st Floor</p>
                  <p>Copenhagen, Denmark</p>
                  <p>1112</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday – Tuesday</p>
                  <p>10:30am – 5:00pm</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Phone</h3>
                <div className="text-muted-foreground">
                  <p>+45 89 88 12 45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Departments */}
          <div className="bg-white p-8 lg:p-12">
            <h2 className="mb-8">Departments</h2>

            <div className="space-y-0 border-t border-border">
              {/* General Inquiries */}
              <Collapsible 
                open={openDepartment === "general"}
                onOpenChange={() => toggleDepartment("general")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-6 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-xl">General Inquiries</span>
                  {openDepartment === "general" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-6 pb-8 border-b border-border">
                  <p className="text-muted-foreground mb-4">
                    Got a question about a product, need help with an order, or just want to reach out?
                  </p>
                  <p className="mb-2">
                    We're here to help. Reach us at{" "}
                    <a href="mailto:info@tanariri.com" className="text-[#d87f4a] hover:underline">
                      info@tanariri.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    * We usually respond within 1-2 business days.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Trade & Wholesale */}
              <Collapsible 
                open={openDepartment === "trade"}
                onOpenChange={() => toggleDepartment("trade")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-6 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-xl">Trade & Wholesale</span>
                  {openDepartment === "trade" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-6 pb-8 border-b border-border">
                  <p className="text-muted-foreground mb-4">
                    Interested in wholesale or trade partnerships? We'd love to hear from you.
                  </p>
                  <p>
                    Contact us at{" "}
                    <a href="mailto:trade@tanariri.com" className="text-[#d87f4a] hover:underline">
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
                <CollapsibleTrigger className="flex items-center justify-between w-full py-6 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-xl">Press & Media</span>
                  {openDepartment === "press" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-6 pb-8 border-b border-border">
                  <p className="text-muted-foreground mb-4">
                    For press inquiries, interviews, or media assets, please reach out to our press team.
                  </p>
                  <p>
                    Email us at{" "}
                    <a href="mailto:press@tanariri.com" className="text-[#d87f4a] hover:underline">
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
                <CollapsibleTrigger className="flex items-center justify-between w-full py-6 border-b border-border hover:text-[#d87f4a] transition-colors">
                  <span className="text-xl">Showrooms</span>
                  {openDepartment === "showrooms" ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-6 pb-8 border-b border-border">
                  <p className="text-muted-foreground mb-4">
                    Visit our showrooms to experience our collections in person. Book an appointment today.
                  </p>
                  <p>
                    Contact{" "}
                    <a href="mailto:showroom@tanariri.com" className="text-[#d87f4a] hover:underline">
                      showroom@tanariri.com
                    </a>
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 lg:p-12">
            <h2 className="mb-8">Let's hear from you</h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <Input 
                  placeholder="Name"
                  className="h-12 bg-background border-border"
                />
              </div>

              {/* Email */}
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  className="h-12 bg-background border-border"
                />
              </div>

              {/* Department Select */}
              <div>
                <Select>
                  <SelectTrigger className="h-12 bg-background border-border">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiries</SelectItem>
                    <SelectItem value="trade">Trade & Wholesale</SelectItem>
                    <SelectItem value="press">Press & Media</SelectItem>
                    <SelectItem value="showrooms">Showrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Region */}
              <div>
                <Label className="mb-4 block">Region *</Label>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                    {[
                      { value: "europe", label: "Europe" },
                      { value: "north-america", label: "North America" },
                      { value: "south-america", label: "South America" },
                      { value: "asia", label: "Asia" },
                      { value: "africa", label: "Africa" },
                      { value: "australia", label: "Australia / Oceania" }
                    ].map((region) => (
                      <div key={region.value} className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedRegion(region.value)}
                          className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors"
                        >
                          {selectedRegion === region.value && (
                            <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                          )}
                        </button>
                        <Label 
                          onClick={() => setSelectedRegion(region.value)}
                          className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {region.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea 
                  placeholder="Message"
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox id="privacy" className="mt-1" />
                <Label htmlFor="privacy" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the Privacy Policy and consent to be contacted by TanaRiri regarding my inquiry. *
                </Label>
              </div>

              {/* Submit Button */}
              <div>
                <Button 
                  type="submit"
                  className="bg-black text-white hover:bg-black/90 h-12 px-8"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Stay Inspired Section */}
      <SectionDivider />
      <StayInspired />
    </div>
  );
}
