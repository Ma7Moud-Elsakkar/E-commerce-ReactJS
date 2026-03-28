import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Components/header/slidePro/Product";
import "./CatPege.css";
import SlideLoading from "../../Components/header/slidePro/SlideLoading";
import PageTransition from "../../Components/header/PageTransition";

function CatPage() {
    const { category } = useParams();

    const [categoryPro, setCategoryPro] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryPro(data);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [category]);

    console.log(categoryPro);

    return (
        <PageTransition key={category}>
            <div className="cat_products">
                {loading ? (
                    <SlideLoading key={category} />
                ) : (
                    <div className="container">
                        <div className="top_slide">
                            <h2>
                                {category} : {categoryPro.limit}
                            </h2>
                            <p>Discover our latest collection of premium products</p>
                        </div>

                        <div className="products">
                            {categoryPro.products.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}

export default CatPage;
