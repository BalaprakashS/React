import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const ProductGallery = () => {

  const products = [
    product1,
    product2,
    product3,
    product4,
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-center mb-10">
        Product Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={product}
              alt={`Product ${index + 1}`}
              className="w-full h-64 object-cover"
            />

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductGallery;