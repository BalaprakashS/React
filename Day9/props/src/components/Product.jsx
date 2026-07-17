function Product({
  productName,
  price,
  inStock,
}) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Product 
      </h2>

      <p>Product : {productName}</p>

      <p>Price : ₹{price}</p>

      <p>
        Status :
        {inStock
          ? " In Stock"
          : " Out Of Stock"}
      </p>

    </div>
  );
}

export default Product;