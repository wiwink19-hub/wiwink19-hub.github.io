import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Lumière Jewels</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Welcome to Lumière Jewels, where exceptional artistry meets timeless elegance since 1995.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Our Heritage</h2>
              <p>
                Lumière Jewels was established with a passion for creating extraordinary jewelry that celebrates life's most precious moments. For nearly three decades, we have been crafting exquisite pieces that combine traditional artistry with contemporary design, each telling a unique story of love, celebration, and enduring beauty.
              </p>
              <p>
                What began in a small atelier has blossomed into a renowned destination for fine jewelry, trusted by generations of discerning clients who appreciate exceptional quality and masterful craftsmanship.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Authenticity</h3>
                  <p>Every diamond and gemstone is certified conflict-free with full provenance documentation.</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Craftsmanship</h3>
                  <p>Handcrafted by master jewelers with uncompromising attention to every detail.</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Excellence</h3>
                  <p>Only the finest materials: 18K gold, platinum, and premium gemstones in every creation.</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Trust</h3>
                  <p>Lifetime warranty and certification with every purchase, backed by white-glove service.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Why Choose Us?</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Certified conflict-free diamonds and gemstones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Master jewelers with decades of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Lifetime warranty on all pieces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Complimentary professional cleaning and inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Personal jewelry consultation services</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
