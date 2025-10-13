import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1740811620405-8a505f3eb13c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZGlubmVyd2FyZSUyMHBsYXRlc3xlbnwxfHx8fDE3NjAxNzk3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative w-full px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-white">
            Join Our Newsletter
          </h2>
          <p className="mb-8 text-white/90">
            Subscribe to receive updates on new arrivals, special offers, and other discount information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white text-foreground border-white"
            />
            <Button 
              size="lg"
              className="whitespace-nowrap bg-white text-foreground hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
