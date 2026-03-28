import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../Components/header/PageTransition";
import Product from "../Components/header/slidePro/Product";
import SlideLoading from "../Components/header/slidePro/SlideLoading";
import "./Search.css"

function SearchResults() {
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(useLocation().search).get("query");

  const [loading, setLoading] = useState(true);

  console.log(results);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="cat_products">
        {loading ? (
          <SlideLoading key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>
                Results for  : {query}
              </h2>
            </div>

            <div className="products">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : <p className="not_found">No Results Found</p> }
      </div>
    </PageTransition>
  );
}

export default SearchResults;
