import HeroSlider from "../../Components/header/HeroSlider";
import "./Home.css";
import SlidePro from "../../Components/header/slidePro/SlidePro";
import { useEffect, useState } from "react";
import SlideLoading from "../../Components/header/slidePro/SlideLoading";
import PageTransition from "../../Components/header/PageTransition";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "womens-watches",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading ? (
          <SlideLoading />
        ) : (
          categories.map((category) => (
            <SlidePro
              key={category}
              data={products[category] || []}
              title={category.replace("-", " ")}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default Home;
