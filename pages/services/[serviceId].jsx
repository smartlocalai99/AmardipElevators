import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();
  const { serviceId } = router.query;
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white pt-24">
      <Navbar />
      <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 capitalize">Service: {serviceId?.toString().replace(/-/g, ' ')}</h1>
        <p className="text-gray-400">Service details coming soon...</p>
      </div>
      <Footer />
    </main>
  );
}
