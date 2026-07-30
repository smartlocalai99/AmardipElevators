import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function FaqsPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white pt-24">
      <Navbar />
      <div className="py-16">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
