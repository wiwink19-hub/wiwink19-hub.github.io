import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Lumière Jewels</h3>
            <p className="text-sm text-muted-foreground">
              Exquisite fine jewelry crafted with exceptional artistry and timeless elegance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/rings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/category/necklaces" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/category/earrings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/category/bracelets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/category/watches" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Watches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Lumière Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
