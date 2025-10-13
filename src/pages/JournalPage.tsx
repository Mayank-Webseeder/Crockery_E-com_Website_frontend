import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const articles = [
  {
    id: 1,
    title: "The Art of Table Setting",
    excerpt: "Discover the timeless principles of elegant table arrangements that transform meals into memorable experiences.",
    image: "https://images.unsplash.com/photo-1606566797801-c2a3f4a60e43?w=800",
    date: "October 10, 2025",
    category: "Design"
  },
  {
    id: 2,
    title: "Sustainable Ceramics: Our Process",
    excerpt: "Learn about our commitment to eco-friendly materials and ethical production practices.",
    image: "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?w=800",
    date: "October 5, 2025",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Caring for Your Crockery",
    excerpt: "Essential tips to maintain the beauty and longevity of your handcrafted pieces.",
    image: "https://images.unsplash.com/photo-1493096317728-72e9e4a6e58d?w=800",
    date: "September 28, 2025",
    category: "Care"
  }
];

export function JournalPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="w-full px-8 lg:px-16">
        <h1 className="mb-6">Journal</h1>
        <p className="text-muted-foreground max-w-2xl mb-16">
          Stories, insights, and inspiration from the world of craftsmanship and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">{article.category} • {article.date}</p>
                <h3 className="group-hover:text-[#d87f4a] transition-colors">{article.title}</h3>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
