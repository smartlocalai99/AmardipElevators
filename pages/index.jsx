import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProductSection from "@/components/ProductSection";
import ConsultCTA from "@/components/ConsultCTA";
import ServicesSection from "@/components/ServicesSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import KadapaReviewsMap from "@/components/KadapaReviewsMap";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <InstagramFeed />
      <Stats />
      <ProductSection />
      <ConsultCTA />
      <ServicesSection />
      <ProjectsGallery />
      <GoogleReviewsSection />
      <KadapaReviewsMap />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
