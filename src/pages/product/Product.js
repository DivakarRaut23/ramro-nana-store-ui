import React from 'react'
import ProductLayout from '../../components/layout/ProductLayout'
import ProductCard from '../../components/products/ProductCard'

const Product = () => {
    return (
        <div>
            <ProductLayout>
                <ProductCard />
                <ProductCard />
            </ProductLayout>
            
        </div>
    )
}

export default Product
