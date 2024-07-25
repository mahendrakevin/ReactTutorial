import {useEffect, useState} from "react";



const ProductList = ({ category }: { category: string }) => {
    const [product, setProduct] = useState<string[]>([])

    useEffect(() => {
        console.log('Fetching products in ', category)
        setProduct(['Clothing', 'Electronics', 'Books'])
        console.log(product)
    }, [category]);

    return (
        <div>
            <h1>Product List</h1>
        </div>
    )
}

export default ProductList;