const multiply = (a, b) => {
  return a * b;
};

// const items = [
//   { id: 1, name: "alta", price: 200 },
//   { id: 2, name: "alta", price: 100 },
//   { id: 3, name: "alta", price: 300 },
//   { id: 4, name: "alta", price: 500 },
//   { id: 5, name: "alta", price: 400 },
// ];
// const itemsReducer = (previous, current) => previous + current.price;
// const itemsTotal = items.reduce(itemsReducer, 0);

// const numbers = [98, 37, 54, 78, 33];
// const numbersReducer = (previous, current) => previous + current;
// const totalNumber = numbers.reduce(numbersReducer, 0)
const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
};

export { multiply, getTotalPrice as getTotal };
