export const addPizzaToCart = (
  id,
  input,
  name,
  price,
  img,
  setPizza,
  setInput
) => {
  const currentUser = JSON.parse(localStorage.getItem("Current user"));
  const users = JSON.parse(localStorage.getItem("Users"));

  const isPizzaThere = currentUser.cart.find(
    (cartPizza) => cartPizza.id === id
  );

  if (isPizzaThere) {
    isPizzaThere.count += parseInt(input);
    users
      .find((user) => currentUser.username === user.username)
      .cart.find((cartPizza) => cartPizza.id === id).count += parseInt(input);
  } else {
    currentUser.cart.push({
      id: id,
      count: parseInt(input),
      name: name,
      price: price,
      img: img,
    });
    users
      .find((user) => currentUser.username === user.username)
      .cart.push({
        id: id,
        count: parseInt(input),
        name: name,
        price: price,
        img: img,
      });
  }
  localStorage.setItem("Current user", JSON.stringify(currentUser));
  localStorage.setItem("Users", JSON.stringify(users));
  setPizza("");
  setInput(1);
};
