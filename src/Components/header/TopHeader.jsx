import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import "./header.css";
import { CartContext } from "./context/CartContext";
import SearchBox from "../SearchBox";

function TopHeader() {
    const { cartItems, fevItems } = React.useContext(CartContext);

    return (
        <div>
            <div className="top-header">
                <div className="container">
                    <Link className="logo" to="/">
                        {" "}
                        <img src={Logo} alt="logo" />{" "}
                    </Link>

                    <SearchBox />

                    <div className="header_icons">
                        <div className="icon">

                            <Link to="/favorites">
                                <CiHeart />
                                <span className="count">{fevItems.length}</span>
                            </Link>

                        </div>

                        <div className="icon">
                            <Link to="/cart">
                                <BsCart3 />
                                <span className="count">{cartItems.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
