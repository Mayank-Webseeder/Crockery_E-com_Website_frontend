import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function StayInspired() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MDM1NDg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stay Inspired"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left side - Text */}
          <div className="lg:max-w-lg">
            <h2 className="text-white mb-4 text-3xl" style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 400,
                  fontSize: "48px",
                }}>Stay Inspired</h2>
            <p className="text-white/90">
              Subscribe to receive updates on new posts, exclusive offers, and special content just for you.
            </p>
          </div>

          {/* Right side - Email Form */}
          <div className="flex gap-2 lg:flex-shrink-0">
            <Input
              type="email"
              placeholder="E-mail"
              className="bg-white border-white w-full lg:w-80 h-10"
            />
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 px-6 h-10 flex-shrink-0"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}