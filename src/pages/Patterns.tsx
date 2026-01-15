import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternCard from "@/components/PatternCard";
import { patterns, categories, difficulties } from "@/data/patterns";
import { Button } from "@/components/ui/button";

const Patterns = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredPatterns = useMemo(() => {
    return patterns.filter((pattern) => {
      const categoryMatch =
        selectedCategory === "all" || pattern.category === selectedCategory;
      const difficultyMatch =
        selectedDifficulty === "all" ||
        pattern.difficulty === selectedDifficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [selectedCategory, selectedDifficulty]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Pattern Collection
            </h1>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Explore our handcrafted crochet patterns for every skill level
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-body text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "subtle"}
                    size="sm"
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="font-body text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Difficulty
              </h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <Button
                    key={diff.id}
                    variant={
                      selectedDifficulty === diff.id ? "default" : "subtle"
                    }
                    size="sm"
                    onClick={() => setSelectedDifficulty(diff.id)}
                  >
                    {diff.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="font-body text-muted-foreground mb-6">
            Showing {filteredPatterns.length} pattern
            {filteredPatterns.length !== 1 ? "s" : ""}
          </p>

          {/* Pattern Grid */}
          {filteredPatterns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPatterns.map((pattern) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground text-lg">
                No patterns found matching your filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Patterns;
