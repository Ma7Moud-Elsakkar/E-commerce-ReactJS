import React, { useContext } from 'react'
import PageTransition from "../../Components/header/PageTransition";
import { CartContext } from '../../Components/header/context/CartContext';
import Product from '../../Components/header/slidePro/Product';


function Fev() {

    const { fevItems } = useContext(CartContext)


  return (
    <PageTransition>
        <div className="category_products FavoritsPage">
            <div className="container">
                <div className="top_slide">
                <h2>Yor Favorits</h2>
                </div>

                {fevItems.length === 0 ? (
                    <p>No Favorits Products Yet.</p>
                ) : (
                    <div className="products">
                        {fevItems.map(item => (
                            <Product item={item} key={item.id} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    </PageTransition>
  )
}

export default Fev