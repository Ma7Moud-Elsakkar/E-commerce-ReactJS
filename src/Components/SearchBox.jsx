import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTransition from "./header/PageTransition";

function SearchBox() {
    const [searchTerm, setSearchTrim] = useState("");

    const [sugges, setSugges] = useState([]);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.trim())
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        setSugges([]);
    };

    useEffect(() => {
        const fetchsugges = async () => {
            if (!searchTerm.trim()) {
                setSugges([]);
                return;
            }

            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${searchTerm}`,
                );
                const data = await res.json();
                setSugges(data.products.slice(0, 5) || []);
            } catch (error) {
                console.error("Search Error :", error);
                setSugges([]);
            }
        };

        const debonuce = setTimeout(() => {
            fetchsugges();
        }, 300);

        return () => clearTimeout(debonuce);
    }, [searchTerm]);

    useEffect(() => {
        setSugges([]);
    }, [location]);

    return (
        <PageTransition>
            <div className="search_box_container">
                <form onSubmit={handleSubmit} className="search_box">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search For Products"
                        onChange={(e) => setSearchTrim(e.target.value)}
                        autoComplete="off"
                    />
                    <button type="submit">
                        <IoSearchSharp />
                    </button>
                </form>

                {sugges.length > 0 && (
                    <ul className="Sugges">
                        {sugges.map((item) => (
                            <li key={item.id}>
                                <Link className="search_output"
                                    to={`/product/${item.id}`}>
                                    <img src={item.images[0]} alt={item.title} />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </PageTransition>
    );
}

export default SearchBox;
