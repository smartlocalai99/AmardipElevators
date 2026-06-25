import { notFound } from "next/navigation";
import { PRODUCT_CONTENT } from "@/app/data/productData";
import ElevatorTypeTemplate from "@/app/components/ElevatorTypeTemplate";
import ComponentTypeTemplate from "@/app/components/ComponentTypeTemplate";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default async function ProductPage({ params }) {
    const { productId } = await params;

    let product = null;

    for (const key in PRODUCT_CONTENT) {
        const found = PRODUCT_CONTENT[key].products?.find(
            (item) => item.id === productId
        );

        if (found) {
            product = found;
            break;
        }
    }

    if (!product) {
        notFound();
    }

    return (
        <main className="bg-[#fafafa]">
            <Navbar />
            {product.pageLayout === "elevator" ? (
                <ElevatorTypeTemplate product={product} />
            ) : (
                <ComponentTypeTemplate product={product} />
            )}
            <Footer />
        </main>
    );
}
