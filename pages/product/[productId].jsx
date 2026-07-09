import { PRODUCT_CONTENT } from "@/data/productData";
import ElevatorTypeTemplate from "@/components/ElevatorTypeTemplate";
import ComponentTypeTemplate from "@/components/ComponentTypeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage({ product }) {
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

function findProduct(productId) {
    for (const key in PRODUCT_CONTENT) {
        const found = PRODUCT_CONTENT[key].products?.find((item) => item.id === productId);
        if (found) return found;
    }

    return null;
}

export function getStaticPaths() {
    const paths = Object.values(PRODUCT_CONTENT).flatMap((group) =>
        group.products?.map((product) => ({ params: { productId: product.id } })) ?? []
    );

    return {
        paths,
        fallback: false,
    };
}

export function getStaticProps({ params }) {
    const product = findProduct(params.productId);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}
