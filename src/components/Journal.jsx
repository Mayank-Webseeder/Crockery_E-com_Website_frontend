import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const journalPosts = [
  {
    title: "Why fewer, better pieces still matter",
    date: "May 9, 2025",
    image:
      "https://images.unsplash.com/photo-1629374888580-3d67004f0ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MDE4MTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Corners, curves, and the geometry of calm",
    date: "June 15, 2025",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjAxODExMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Soft light, hard edges",
    date: "July 8, 2025",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGllY2VzJTIwc3R5bGluZ3xlbnwxfHx8fDE3NjAxODExMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Journal() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl">From our journal</h2>
          <Button variant="outline" className="text-sm">
            View more →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {journalPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mb-2 leading-tight group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}