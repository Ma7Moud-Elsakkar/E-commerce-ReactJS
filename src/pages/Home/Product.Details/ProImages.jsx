import React from "react";

function ProImages({product}) {
    return (
        <div className="img_items">
            <div className="big_img">
                <img id="big_img" src={product.images[0]} alt={product.title} />
            </div>

            <div className="sm_img">
                {product.images.map((img, index) => (
                    <div className="img_div_sm" key={index}>

                    <img
                        src={img}
                        alt={product.title}
                        onClick={() => (document.getElementById("big_img").src = img)}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProImages;
