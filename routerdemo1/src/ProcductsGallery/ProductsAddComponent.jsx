import { useState } from "react";
import "./gallery.css";

/*  */

const ProductsAddComponent = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("car");
  const [description, setDescription] = useState(" mercedes benz");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(999000);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const addItem = () => {
    const newProduct = {
      ti: title,
      des: description,
      img: image,
      pri: price,
    };
    if (title && description !== "") {
      setProducts((p) => [...p, newProduct]);
    }

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };
  const cancelItem = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <>
      <div className="container">
        <label> Title : </label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter the title"
        />{" "}
        <br />
        <label>Description : </label>
        <textarea
          name="prod-desc"
          cols="30"
          rows="1"
          value={description}
          onChange={handleDescription}
          placeholder="Enter product description..."
        ></textarea>{" "}
        <br />
        <label>Image : </label>
        {/* <input type="text" value={image} onChange={handleImage} /> */}
        <img
          className="image"
          src="https://m.media-amazon.com/images/I/516+2pP6dXL._MCnd_AC_.jpg"
          alt="image"
          value={image}
          onChange={handleImage}
        />
        <br />
        <label> Price : </label>
        <input
          type="number"
          value={price}
          onChange={handlePrice}
          placeholder="Enter the Price"
        />{" "}
        <br />
        <br />
        <button onClick={addItem}>Add Item</button> <br />
        <button onClick={cancelItem}>Cancel Item</button>
      </div>

      <div className="show-product">
        <ol>
          {products.map((product, index) => (
            <li key={index}>
              {product.ti}
              {product.des}
              {product.image}
              {product.pri}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ProductsAddComponent;
