import React , { useState} from 'react'
import mini from '../assets/mini.png-removebg-preview.png'
import remove from '../assets/ic--baseline-delete (2).svg'
import edit from '../assets/line-md--edit-filled.svg'

            import pic1 from '../assets/pic1.jpg'
            import pic2 from '../assets/pic2.jpg'
            import pic3 from '../assets/pic3.jpg'
            import pic4 from '../assets/pic4.jpg'
            import pic5 from '../assets/pic5.jpg'
            import pic6 from '../assets/pic6.jpg'

import '../App.css'

const Cart = () => {

const [productName, setProductName] = useState('')
const [productPrice, setProductPrice] = useState(0)
const [productDescription, setProductDescription] = useState('')
const [productQuantity, setProductQuantity] = useState(0)
const [productImage,setProductImage ] = useState('')
const [allProducts, setAllProducts] = useState([])

const [editName, setEditName] = useState('')
const [editPrice, setEditPrice] = useState(0)
const [editDescription, setEditDescription] = useState('')
const [editQuantity, setEditQuantity] = useState(0)
const [editImage,setEditImage ] = useState('')
const [editTprice, setEditTPrice] = useState(0)
const [editId, setEditId] = useState('')
// const [allProducts, setAllProducts] = useState([])

  const handleEvent = (e)=>{
      e.preventDefault();
      let newProduct={id:Date.now(),productName, productPrice,productDescription,productQuantity,productImage,tPrice: Number(productQuantity * productPrice)}
      setAllProducts([...allProducts, newProduct])

      console.log(allProducts);

      

      setProductName('')
      setProductPrice('')
      setProductDescription('')
      setProductQuantity('')      

  }

  const onDelete =(id)=>{
      setAllProducts(allProducts.filter(items => items.id !==id))
  }

  const openEdit = (items)=>{
    setEditId(items.id)
    setEditName(items.productName)
    setEditPrice(items.productPrice)
    setEditDescription(items.productDescription)
    setEditQuantity(items.productQuantity)
    setEditImage(items.productImage)
    setEditTPrice(items.tPrice)

  }

  const saveChanges =()=>{
    setAllProducts(allProducts.map(items => items.id === editId? {...items,
      productName:editName,
      productPrice:editPrice,
      productDescription:editDescription,
      productQuantity:editQuantity,
      productImage:editImage,
      tPrice:editPrice * editQuantity
    }: items))
  }

  localStorage.setItem('AllProducts', JSON.stringify(allProducts))

  const storage = JSON.parse(localStorage.getItem('AllProducts'))

  console.log(storage);
    return (
    <>
        <div className='d-flex gap-2 mt-4 mx-3 flex-column flex-lg-row justify-content-center' id='style'> 
            <form className='border d-flex mt-2 flex-column col-6 p-3 gap-3' onSubmit={handleEvent}>
                  <div className='d-flex justify-content-start align-items-center'>
                      <img style={{ width: '20%' }} src={mini} alt="" />
                      <h2 style={{ color: '#dc2f30' }}>Mini-Mart</h2>
                  </div>
                  <h6 className='text-center pe-2 ' style={{ textIndent: '50px' }}>Welcome to the Mini Mart! Your one-stop shop for all your needs</h6>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Name</label>
                      <input required type="text" id='font' className='form-control'placeholder='Enter Product Name' value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Price</label>
                      <input required type="number" id='font' className='form-control'placeholder='Enter Product price' value={productPrice} onChange={(e)=>{setProductPrice(Number(e.target.value))}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Description</label>
                      <textarea type="text" id='font' className='form-control'placeholder='Enter Product Description' value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Quantity</label>
                      <input required type="number" id='font' className='form-control'placeholder='Enter Product Quantity'value={productQuantity} onChange={(e)=> {setProductQuantity(Number(e.target.value))}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Image URL</label>
                      <input required type="text" id='font' className='form-control'placeholder='Enter Product image url link' value={productImage} onChange={(e)=> {setProductImage(e.target.value)}}/>
                  </div>
                  <div className='d-flex justify-content-end'>
                        <button type='submit' className='btn text-white px-3 my-3 fw-semibold py-2 bg-danger'>
                        Proceed
                  </button>
                  </div>
            </form>

                    <div className='col-6 px-3 border my-2' >
                      <h3 className='text-center'>Shopping list</h3>

                          <div className='row g-3 '>
                              {allProducts.map((items)=> (
                                <>

                                  <div className='border ps-2 col-4' key={items.id}> 
                                    <div className='text-center my-4'>
                                      <img  className='col-12' src={items.productImage} alt="" style={{width:''}} />
                                    </div>
                                    <div style={{fontSize:'0.9rem'}}className='text-center fw-semibold mb-3 '>{items.productName}</div>
                                          <div>
                                              <div className='d-flex flex-column gap-2'>
                                                  <div id='font'><span id='font' className='fw-medium'>Product price:$</span>{items.productPrice}</div>
                                                  <div id='font'><span id='font' className='fw-medium'>Product Quantity:</span>{items.productQuantity}</div>
                                                  <div id='font'><span id='font' className='fw-medium'>Total price :$</span>{items.tPrice}</div>
                                              </div>

                                              <div className='my-3 text-center'>
                                                <button className='btn p-2 bg-transparent ' data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={edit} alt="" onClick={()=>openEdit(items)} /></button>
                                                <button className='btn p-2 bg-transparent me-lg-2' onClick={()=>onDelete(items.id)}><img src={remove} alt="" /></button>
                                              </div>
                                          </div>
                                  
                                
                            </div>
                                </>
                              ))}
                            
                          </div>
                    </div>
        </div>


        {/* edit modal  */}
        {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
                  <div className='d-flex justify-content-start align-items-center'>
                      <img style={{ width: '20%' }} src={mini} alt="" />
                      <h2 style={{ color: '#dc2f30' }}>Mini-Mart</h2>
                  </div>
                  <h6 className='text-center pe-2 ' style={{ textIndent: '50px' }}>Welcome to the Mini Mart! Your one-stop shop for all your needs</h6>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Name</label>
                      <input required type="text" id='font' className='form-control'placeholder='Enter Product Name' value={editName} onChange={(e)=>{setEditName(e.target.value)}} />
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Price</label>
                      <input required type="number" id='font' className='form-control'placeholder='Enter Product price' value={editPrice} onChange={(e)=>{setEditPrice(Number(e.target.value))}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Description</label>
                      <textarea type="text" id='font' className='form-control'placeholder='Enter Product Description' value={editDescription} onChange={(e)=>{setEditDescription(e.target.value)}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Quantity</label>
                      <input required type="number" id='font' className='form-control'placeholder='Enter Product Quantity'value={editQuantity} onChange={(e)=> {setEditQuantity(Number(e.target.value))}}/>
                  </div>
                  <div className=''>
                      <label htmlFor="" id='font'>Product Image URL</label>
                      <input required type="text" id='font' className='form-control'placeholder='Enter Product image url link' value={editImage} onChange={(e)=> {setEditImage(e.target.value)}}/>
                  </div>
                  
            
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>saveChanges()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Cart