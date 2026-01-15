import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternCard from "@/components/PatternCard";
import { patterns } from "@/data/patterns";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-crochet.jpg";

const Index = () => {
  const featuredPatterns = patterns.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Handcrafted Patterns for{" "}
                <span className="text-primary">Cozy Creations</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
                Discover beautiful crochet patterns designed for every skill
                level. Create something special, one stitch at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="hero">
                  <Link to="/patterns">
                    Browse Patterns
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={heroImage}
                  alt="Cozy crochet supplies with handmade amigurumi bear"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Patterns */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Featured Patterns
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Our most loved designs, handpicked for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPatterns.map((pattern) => (
              <PatternCard
                key={pattern.id}
                id={pattern.id}
                title={pattern.title}
                image={pattern.image}
                price={pattern.price}
                category={pattern.category}
                difficulty={pattern.difficulty}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/patterns">
                View All Patterns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Toys", emoji: "🧸", category: "toys" },
              { name: "Clothes", emoji: "👕", category: "clothes" },
              { name: "Accessories", emoji: "👜", category: "accessories" },
              { name: "Home", emoji: "🏠", category: "home" },
            ].map((cat) => (
              <Link
                key={cat.category}
                to={`/patterns?category=${cat.category}`}
                className="group bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <span className="text-4xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to Start Crafting?
            </h2>
            <p className="font-body text-primary-foreground/90 mb-8 max-w-md mx-auto">
              Join our community and get access to exclusive patterns and tips.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-cream-dark"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
