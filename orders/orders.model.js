const orders = [
  {
    date: "2005-05-05",
    subtotal: 98,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Show",
          price: 42.5,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
