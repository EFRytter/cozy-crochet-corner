import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-sage-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                About Cozy Stitches
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We believe that every stitch tells a story. Our patterns are
                designed with love, care, and a passion for the craft that has
                brought joy to makers for generations.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Cozy Stitches was born from a simple love of crochet and a
                  desire to share that passion with others. What started as
                  handwritten patterns shared with friends has grown into a
                  collection of thoughtfully designed patterns for crafters
                  around the world.
                </p>
                <p>
                  Each pattern is tested, refined, and written with clear
                  instructions so that whether you're picking up a hook for the
                  first time or you've been crocheting for years, you can create
                  something beautiful.
                </p>
                <p>
                  We believe in the magic of handmade items — the warmth of a
                  blanket made with intention, the joy of a toy crafted with
                  care, the pride of wearing something you made yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-cream-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-12 text-center">
              What We Believe In
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  Crafted with Love
                </h3>
                <p className="font-body text-muted-foreground">
                  Every pattern is designed with care and attention to detail.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  Clear Instructions
                </h3>
                <p className="font-body text-muted-foreground">
                  Patterns that are easy to follow, no matter your skill level.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  Community First
                </h3>
                <p className="font-body text-muted-foreground">
                  We're here to support and inspire fellow crafters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
              Browse our collection and find your next favorite pattern.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/patterns">Explore Patterns</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
