import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="relative h-[600px] bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 flex items-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 leading-tight">
                Timeless Elegance in Every Piece
              </h1>
              <p className="text-xl text-background/80 mb-8">
                Discover our exquisite collection of fine jewelry. From engagement rings to statement pieces, each creation tells a story of exceptional craftsmanship.
              </p>
              <div className="flex gap-4">
                <Link to="/category/rings">
                  <Button size="lg" className="text-lg">
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="secondary" className="text-lg">
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {[
              { name: "Rings", path: "/category/rings" },
              { name: "Necklaces", path: "/category/necklaces" },
              { name: "Earrings", path: "/category/earrings" },
              { name: "Bracelets", path: "/category/bracelets" },
              { name: "Watches", path: "/category/watches" },
            ].map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="aspect-square bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group border border-border"
              >
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Handpicked favorites for your home</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/category/rings">
              <Button size="lg" variant="outline">
                View All Jewelry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Lumière Jewels?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Certified Authentic</h3>
                <p className="text-muted-foreground">All diamonds and gemstones are certified conflict-free and authentic</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Lifetime Warranty</h3>
                <p className="text-muted-foreground">Every piece comes with a lifetime warranty for your peace of mind</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">Handcrafted by master jewelers with decades of experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
