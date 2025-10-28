import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryProducts = products.filter((p) => p.category === category);

  const categoryNames: { [key: string]: string } = {
    bedding: "Bedding",
    bath: "Bath",
    kitchen: "Kitchen",
    furniture: "Furniture",
    decor: "Decor",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{categoryNames[category || ""] || "Products"}</h1>
          <p className="text-lg text-muted-foreground">
            Discover our collection of quality {category} essentials
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
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
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;
