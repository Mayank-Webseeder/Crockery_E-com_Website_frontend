import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="w-full px-8 lg:px-16">
        <h1 className="mb-6">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mb-16">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <Input placeholder="Your name" className="h-12" />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="h-12" />
              </div>
              <div>
                <label className="block mb-2">Subject</label>
                <Input placeholder="How can we help?" className="h-12" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us more..." 
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button size="lg" className="bg-black text-white hover:bg-black/90 h-12 px-8">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>Pilestaede 45, 1st Floor</p>
                    <p className="text-muted-foreground">1112 Copenhagen, Denmark</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>hello@tanariri.com</p>
                    <p className="text-muted-foreground">We'll reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p>+45 12 34 56 78</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm CET</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
