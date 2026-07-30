import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogIndex() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white pt-24">
      <Navbar />
      <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-400">Latest news and updates coming soon...</p>
      </div>
      <Footer />
    </main>
  );
}
