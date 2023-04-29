const storageDb = (id) => {
  let shoppingCart = {};

  // get shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    // console.log(storedCart);
    shoppingCart = JSON.parse(storedCart);
  }

  // Add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // localStorage.setItem(id, newQuantity);
  } else {
    shoppingCart[id] = 1;
    // localStorage.setItem(id, 1);
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { storageDb, removeFromDb };
