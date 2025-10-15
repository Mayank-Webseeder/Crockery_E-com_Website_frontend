import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    region: "",
    message: "",
    privacyConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, region: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! (Check console for data)");
  };

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      {/* Top Section: Questions, requests... */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="text-5xl font-serif mb-6">Questions, requests, or just a hello, feel free to reach out.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p>Pilestræde 45, 1st Floor</p>
            <p>Copenhagen, Denmark</p>
            <p>1112</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <p>Monday – Tuesday</p>
            <p>10:30am – 5:00pm</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+45 89 88 12 45</p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Main Content: Departments and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
        {/* Left Column: Departments */}
        <div>
          <h2 className="text-4xl font-serif mb-8">Departments</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">General Inquiries</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>Got a question about a product, need help with an order, or just want to reach out?</p>
                <p className="mt-2">We're here to help. Reach us at <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>.</p>
                <p className="mt-2 text-sm">* We usually respond within 1-2 business days.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium">Trade & Wholesale</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For trade and wholesale inquiries, please contact us at <a href="mailto:trade@example.com" className="text-blue-600 hover:underline">trade@example.com</a>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium">Press & Media</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For press and media relations, please reach out to <a href="mailto:press@example.com" className="text-blue-600 hover:underline">press@example.com</a>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-medium">Showrooms</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Visit our showrooms for a personal experience. Find locations and hours <a href="#" className="text-blue-600 hover:underline">here</a>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Column: Let's hear from you form */}
        <div>
          <h2 className="text-4xl font-serif mb-8">Let's hear from you</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="department">Choose department</Label>
              <Select onValueChange={handleSelectChange} value={formData.department}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiries</SelectItem>
                  <SelectItem value="trade">Trade & Wholesale</SelectItem>
                  <SelectItem value="press">Press & Media</SelectItem>
                  <SelectItem value="showroom">Showrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Region *</Label>
              <RadioGroup onValueChange={handleRadioChange} value={formData.region} className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="europe" id="r1" />
                  <Label htmlFor="r1">Europe</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="north-america" id="r2" />
                  <Label htmlFor="r2">North America</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="south-america" id="r3" />
                  <Label htmlFor="r3">South America</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="asia" id="r4" />
                  <Label htmlFor="r4">Asia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="africa" id="r5" />
                  <Label htmlFor="r5">Africa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="australia-oceania" id="r6" />
                  <Label htmlFor="r6">Australia / Oceania</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, privacyConsent: checked as boolean }))}
                required
              />
              <Label htmlFor="privacyConsent" className="text-sm font-normal">
                I agree to the Privacy Policy and consent to be contacted by Furnistør regarding my inquiry. *
              </Label>
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">Submit</Button>
          </form>
        </div>
      </div>

      <SectionDivider />

      {/* Stay Inspired Section */}
      <StayInspired />
    </div>
  );
}
