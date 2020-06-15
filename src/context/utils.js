export const addToCart = (cart, item) => {
  let cartItem = cart.find((cartItem) => cartItem.id === item.id);
  if (cartItem) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cart, id) => {
  let cartItem = cart.find((cartItem) => cartItem.id === id);

  if (cartItem.quantity === 1) {
    return cart.filter((cartItem) => cartItem.id !== id);
  }

  if (cartItem) {
    return cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cart;
};

export const totalCartItems = (cart) => {
  return cart.reduce((acc, item) => (acc = acc + item.quantity), 0);
};

export const totalBill = (cart) => {
  return cart.reduce(
    (acc, item) => (acc = acc + item.quantity * item.price),
    0
  );
};
