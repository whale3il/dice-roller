
            import React, { useState } from 'react'
            import mini from '../assets/mini.png-removebg-preview.png'
            import pic1 from '../assets/pic1.jpg'
            import pic2 from '../assets/pic2.jpg'
            import pic3 from '../assets/pic3.jpg'
            import pic4 from '../assets/pic4.jpg'
            import pic5 from '../assets/pic5.jpg'
            import pic6 from '../assets/pic6.jpg'
            // import pic7 from '../assets/pic7.jpg'
            import pic8 from '../assets/pic8.jpg'
            import pic9 from '../assets/pic9.jpg'
            import add from '../assets/add.svg'
            import minus from '../assets/minus.svg'
            import { use } from 'react'
            import remove from '../assets/ic--baseline-delete (2).svg'
            import edit from '../assets/line-md--edit-filled.svg'


            const Yowai = () => {

            const [productName, setProductName] = useState('')
            const [productPrice, setProductPrice] = useState('')
            const [productDescription, setProductDescription] = useState('')
            const [productImage, setProductImage] = useState('')
            const [quantity, setsQuantity] = useState()
            const [allProducts, setAllProducts] = useState([])


            const [editName, setEditName] = useState('')
            const [editPrice, setEditPrice] = useState('')
            const [editDescription, setEditDescription] = useState('')
            const [editImage, setEditImage] = useState('')
            const [editQuantity, setEditQuantity] = useState()

           



            const proceed = (event) => {

                        let newProduct = { id: Date.now(), productDescription, productImage, productName, productPrice: Number(productPrice),quantity: Number(quantity), price: Number(quantity * productPrice) }

                        event.preventDefault(); 
                        setAllProducts([...allProducts, newProduct] )
                        console.log(allProducts);

                        setProductName(event.target.value = '')
                        setProductPrice(event.target.value = '')
                        setProductDescription(event.target.value = '')
                        setProductImage(event.target.value='')
                        setsQuantity(event.target.value='')

                        console.log(event);
                        
                    

                    console.log(productName);
            //     setProductImage('')
            //     // setProductPrice('')
            //     setProductDescription('')

                
            }   

            const onDelete = (id) => {
                setAllProducts(allProducts.filter((items) => items.id !== id))
                console.log();
                
            }

            const openEdit =(items)=>{
                        setEditName(items.productName),
                        setEditPrice(items.productPrice),
                        setEditDescription(items.productDescription),
                        setEditImage(items.productImage)
                        setEditQuantity(items.quantity)

            }

            const onEdit =(id)=>{

                setAllProducts(allProducts.map(items => items.id === id ? {...items, productDescription : editDescription, productImage: editImage, productName :editName, productPrice: Number(editPrice),quantity: Number(editQuantity), price: Number(editQuantity * editPrice) } : items))

                console.log(allProducts);
                
            }

            localStorage.setItem('AllProducts', JSON.stringify(allProducts))

            const storage = JSON.parse(localStorage.getItem('AllProducts'))

            console.log(storage);
            



            return (
            <> 
    

            <div className='d-flex px-3 gap-5 flex-column flex-lg-row' style={{backgroundColor:'#f5f5f5', color:'black'}}>

        <div className='border my-4 rounded-3 border-secondary p-2'>
            <div className='d-flex justify-content-start align-items-center'>
                <img style={{ width: '20%' }} src={mini} alt="" />
                <h2 style={{ color: '#dc2f30' }}>Mini-Mart</h2>

            </div>
            <h6 className='text-center pe-2 ' style={{ textIndent: '50px' }}>Welcome to the Mini Mart! Your one-stop shop for all your needs</h6>
    <form className='d-flex flex-column gap-3' onSubmit={proceed}>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Name</label>
                    <input type="text" required style={{ fontSize: '0.8rem' }} placeholder='Enter product Name' className='form-control' value={productName}  onChange={(e) => { setProductName(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Price</label>
                    <input type="number" style={{ fontSize: '0.8rem' }} placeholder='Enter product price' className='form-control' required value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Quantity</label>
                    <input type="number" style={{ fontSize: '0.8rem' }} placeholder='Enter product quantity' className='form-control' required value={quantity} onChange={(e) => { setsQuantity(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Description</label>
                    <textarea type="text" style={{ fontSize: '0.8rem' }} placeholder='Enter product description' className='form-control' required value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product image url link</label>
                    <input type="text" style={{ fontSize: '0.8rem' }} placeholder='Enter product image link' className='form-control'required value={productImage} onChange={(e) => { setProductImage(e.target.value) }} />
                </div>
                <div className='d-flex justify-content-end me-5 my-3 pe-lg-4'>
                    <button type='submit' className='btn text-white px-3 my-3 fw-semibold py-2 bg-danger'>proceed</button>
                </div>
                <button on></button>
            </form>

            </div>

            <div className='cart_show border col-12 col-lg-6 my-4 px-3 rounded-3 border-secondary' >
            <div>
                <p className='text-center my-2 fs-3 bold'>Shopping List</p>

                {allProducts.map((items) => (
                <>
                    {/* <li key={item.id}>{item.productDescription}</li>
                    <li>{item.productImage}</li>
                    <li>{item.productName}</li>
                    <li>{item.productPrice}</li>

                    <button onClick={() => onDelete(item.id)}>Delete</button> */}


                    <div className='d-flex fw-semibold justify-content-between px-3 my-4 border p-3 rounded-3 border-secondary text-white ' style={{ fontSize: '0.8rem', backgroundColor:'#2a2a2a4c' }}>

                    <div className='d-flex flex-column'>
                        <p className=''>Product</p>
                        <div className='me-5 col-12 d-flex align-items-start gap-3'>
                            <img src={items.productImage} className='col-4' alt="" />
                            <div>
                                <div className='mt-lg-3 '>{items.productName}</div>

                                <label htmlFor="" className='mt-lg-3  ms-lg-1'>Color</label>
                                <select className='col-3 border-0'>
                                    color
                                    <option className='border-0' value="" ></option>
                                    <option className='border-0' value="blue">Blue</option>
                                    <option className='border-0' value="red">Red</option>
                                    <option className='border-0' value="green">Green</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex gap-5'>
                        <div className='flex-column gap-5'>
                            <p className='me-lg-3 mb-5 '>Price</p>
                            <p className='fs-6 me-lg-0' >${items.productPrice}</p>
                        </div>

                        <div className=' d-flex gap-lg-3  flex-column'>
                            <p>Quantity</p>
                            <div className='d-flex gap-2 align-items-center'>
                                {/* <button onClick={increaseCount} className='border-0 rounded-5 '>
                                    <img className='' src={add} alt="" />
                                </button> */}
                                
                                <p className='mt-3 ms-lg-3'>{items.quantity}</p>
                                {/* <button onClick={decreaseCount} className='border-0 rounded-5 '>
                                    <img className='' src={minus} alt="" />
                                </button>     */}
                            </div>

                        </div>

                        <div>
                            <div className='flex-column gap-5'>
                                <p className='me-lg-3 mb-4 '>Total Price</p>
                                <p className='fs-6 me-lg-3 ' style={{color:'#f7daa5'}}>${items.price}</p>
                            </div>
                                

                        </div>

                
                    
                        
                    
                    </div>

                    <div className='d-flex flex-row gap-2'>
                            <button type=""  data-bs-toggle="modal" data-bs-target="#exampleModal" className=' me-lg-2 bg-transparent border-0 'style={{}} >
                                <img src={edit} alt="" />
                            </button>

                            <button className='border-0 bg-transparent' onClick={()=>onDelete(items.id)}>
                                <img src={remove} alt="" />
                            </button>
                        </div>
                </div>


                                           {/* modal */}
                        {/* <!-- Button trigger modal --> */}
         
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Changes <span style={{color:'blue'}}>(Coming soon)</span></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
    <form className='d-flex flex-column gap-3' onSubmit={openEdit(items)}>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Name</label>
                    <input type="text" required style={{ fontSize: '0.8rem' }} placeholder='Enter product Name' className='form-control' value={editName}  onChange={(e) => { setEditName(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Price</label>
                    <input type="number" style={{ fontSize: '0.8rem' }} placeholder='Enter product price' className='form-control' required value={editPrice} onChange={(e) => { setEditPrice(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Quantity</label>
                    <input type="number" style={{ fontSize: '0.8rem' }} placeholder='Enter product quantity' className='form-control' required value={editQuantity} onChange={(e) => { setEditQuantity(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product Description</label>
                    <textarea type="text" style={{ fontSize: '0.8rem' }} placeholder='Enter product description' className='form-control' required value={editDescription} onChange={(e) => { setEditDescription(e.target.value) }} />
                </div>
                <div className='col-11 px-2' >
                    <label htmlFor="Product Name" className='fw-semibold' style={{ fontSize: '0.8rem' }}>Product image url link</label>
                    <input type="text" style={{ fontSize: '0.8rem' }} placeholder='Enter product image link' className='form-control'required value={editImage} onChange={(e) => { setEditImage(e.target.value) }} />
                </div>
                
            </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={()=>{onEdit(items.id)}}>Save changes</button>
                </div>
                </div>
            </div>
            </div>



                

                </>
                
                
            ))}

            </div>

            </div>


            <div>


            </div>

            </div>
            </>

            )
            }

            export default Yowai