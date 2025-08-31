import React , { useState } from 'react'

const Product = () => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState('')
    const [allProducts, setAllProducts] = useState('')

    const addProducts =()=>{
        let newProducts = { productDescription, productImage ,productName ,productPrice}
            setAllProducts([...allProducts, newProducts])
            // console.log(allProducts);
            console(e.target.value)
            
        // console.log(productName , productPrice , productDescription , productImage);
    }

        
        
  return (
     <>
            <h1>Mini Mart</h1>
            <p>Welcome to the Mini Mart! Your one-stop shop for all your needs</p>
            <input type="text" placeholder='Product Name'onChange={(e)=> setProductName(e.target.value) }  />
            <input type="text" placeholder='Product Price' onChange={(e)=> setProductPrice(e.target.value)}  />
            <input type="text" placeholder='Product Description'onChange={(e)=> setProductDescription(e.target.value)} />
            <input type="text" placeholder='Product Image Url' onChange={(e) => setProductImage(e.target.value)} />

            <button onClick={addProducts}>Add Product</button>

            <hr />
            <div id='show  '></div>
    </>
  )
}

export default Product