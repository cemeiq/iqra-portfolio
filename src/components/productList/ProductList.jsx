import React from 'react'
import './productlist.css'
import Product from '../Product/Product'
function ProductList() {
    return (
        <div className="productlist">
            <div className="productlist-texts">
            <h1 className="productlist-title">Create & inspire. It's Lama</h1>
            <p className="productlist-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
            </div>

           <div className="productlist-list">
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
            </div> 
        </div>
    )
}

export default ProductList
