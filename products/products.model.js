const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.5,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.5,
    reviews: [],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
};

const addNewReview = (id, rating, comment) => {
  const choosenProduct = getProductById(id);
  console.log(choosenProduct);
  var newProductReview = null;
  if (choosenProduct) {
    newProductReview = {
      rating,
      comment,
    };
    choosenProduct.reviews.push(newProductReview);
  }

  return newProductReview;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewReview,
};
