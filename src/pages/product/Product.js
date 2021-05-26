import React from 'react'
import ProductLayout from '../../components/layout/ProductLayout'
import ProductList from '../../components/products/ProductList'

const Product = () => {
    return (
        <div>
            <ProductLayout>
                <ProductList />
            </ProductLayout>
            
        </div>
    )
}

export default Product
