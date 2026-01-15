import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sage-light border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Cozy Stitches
            </h3>
            <p className="font-body text-muted-foreground max-w-md">
              Handcrafted crochet patterns for every skill level. Create
              something beautiful, one stitch at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/patterns"
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Patterns
                </Link>
              </li>
              <li>
                <Link
                  to="/patterns?category=toys"
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/patterns?category=clothes"
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clothes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@cozystitches.com"
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cozy Stitches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
