import React, { useState } from "react";
import mini from "../assets/mini.png-removebg-preview.png";

const Yowai = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setproductImage] = useState("");
    const [allProducts, setAllProducts] = useState([]);

    const proceed = () => {
        let newProduct = {
            id: Date.now(),
            productDescription,
            productImage,
            productName,
            productPrice,
        };
        setAllProducts([...allProducts, newProduct]);
        localStorage.setItem('newProduct', JSON.stringify(newProduct));

        // optional: clear input fields
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setproductImage('');
    };

    return (
        <>
            <div className="d-flex px-3 gap-5">
                <div className="border my-4 ">
                    <div className="d-flex justify-content-start align-items-center">
                        <img style={{ width: "20%" }} src={mini} alt="" />
                        <h2 style={{ color: "#dc2f30" }}>Mini-Mart</h2>
                    </div>
                    <h6 className="text-center pe-2 " style={{ textIndent: "50px" }}>
                        Welcome to the Mini Mart! Your one-stop shop for all your needs
                    </h6>
                    <div className="d-flex flex-column gap-3">
                        <div className="col-11 px-2">
                            <label
                                htmlFor="Product Name"
                                className="fw-semibold"
                                style={{ fontSize: "0.8rem" }}
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                style={{ fontSize: "0.8rem" }}
                                placeholder="Enter product Name"
                                className="form-control"
                                onChange={(e) => {
                                    setProductName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="col-11 px-2">
                            <label
                                htmlFor="Product Name"
                                className="fw-semibold"
                                style={{ fontSize: "0.8rem" }}
                            >
                                Product Price
                            </label>
                            <input
                                type="number"
                                style={{ fontSize: "0.8rem" }}
                                placeholder="Enter product price"
                                className="form-control"
                                onChange={(e) => {
                                    setProductPrice(e.target.value);
                                }}
                            />
                        </div>
                        <div className="col-11 px-2">
                            <label
                                htmlFor="Product Name"
                                className="fw-semibold"
                                style={{ fontSize: "0.8rem" }}
                            >
                                Product Description
                            </label>
                            <textarea
                                type="text"
                                style={{ fontSize: "0.8rem" }}
                                placeholder="Enter product description"
                                className="form-control"
                                onChange={(e) => {
                                    setProductDescription(e.target.value);
                                }}
                            />
                        </div>
                        <div className="col-11 px-2">
                            <label
                                htmlFor="Product Name"
                                className="fw-semibold"
                                style={{ fontSize: "0.8rem" }}
                            >
                                Product image url link
                            </label>
                            <input
                                type="text"
                                style={{ fontSize: "0.8rem" }}
                                placeholder="Enter product image link"
                                className="form-control"
                                onChange={(e) => {
                                    setproductImage(e.target.value);
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-end me-5 my-3 pe-lg-4">
                            <button
                                onClick={proceed}
                                className="btn text-white px-3 my-3 fw-semibold py-2 bg-danger"
                            >
                                proceed
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cart_show border">
                    <h5>Summary</h5>
                    <ul>
                        {allProducts.map(product => (
                            <li key={product.id}>
                                <h1>{product.productName}</h1>
                                <p>{product.productPrice}</p>
                                <p>{product.productDescription}</p>
                                <p>{product.productImage}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Yowai;
