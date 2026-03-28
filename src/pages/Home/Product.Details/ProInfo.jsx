import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProInfo.css";
import SlidePro from "../../../Components/header/slidePro/SlidePro";
import LoadingProD from "./LoadingProD";
import ProImages from "./ProImages";
import ProText from "./ProText";
import PageTransition from "../../../Components/header/PageTransition";

function ProInfo() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        FetchProduct();
    }, [id]);

    useEffect(() => {
        if (!product) {
            return;
        }
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProducts(data.products);
            })
            .catch((error) => console.error("Error Products:", error))

            .finally(() => setLoadingRelatedProducts(false));
    }, [product?.category]);

    if (!product) return <p>Product not found</p>;

    return (
        <PageTransition key={id}>
                    <div>
            {loading ? (
                <LoadingProD />
            ) : (
                <div className="item_details">
                    <div className="container">
                        <ProImages product={product} />

                        <ProText product={product} />
                    </div>
                </div>
            )}

            {loadingRelatedProducts ? (
                <p>Loading ...</p>
            ) : (
                <SlidePro
                    key={product.category}
                    data={relatedProducts}
                    title={product.category.replace("-", "")}
                />
            )}
        </div>
        </PageTransition>
    );
}

export default ProInfo;
