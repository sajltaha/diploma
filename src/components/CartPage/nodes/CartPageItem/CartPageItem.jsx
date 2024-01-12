import { useState } from "react";
import style from "./CartPageItem.module.css";

export default function CartPageItem({
  img,
  name,
  price,
  count,
  id,
  setData,
  notify,
}) {
  const [input, setInput] = useState(count);

  const increaseCount = () => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    const users = JSON.parse(localStorage.getItem("Users"));
    setInput(parseInt(input) + 1);
    currentUser.cart.find((cartPizza) => cartPizza.id === id).count += 1;
    users
      .find((user) => currentUser.username === user.username)
      .cart.find((cartPizza) => cartPizza.id === id).count += 1;
    localStorage.setItem("Current user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(users));
    setData(currentUser);
  };
  const decreaseCount = () => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    const users = JSON.parse(localStorage.getItem("Users"));
    setInput(parseInt(input) - 1);
    currentUser.cart.find((cartPizza) => cartPizza.id === id).count -= 1;
    users
      .find((user) => currentUser.username === user.username)
      .cart.find((cartPizza) => cartPizza.id === id).count -= 1;
    localStorage.setItem("Current user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(users));
    setData(currentUser);
  };
  const deleteCard = () => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    const users = JSON.parse(localStorage.getItem("Users"));
    currentUser.cart = currentUser.cart.filter(
      (cartPizza) => cartPizza.id !== id
    );
    users.find((user) => currentUser.username === user.username).cart = users
      .find((user) => currentUser.username === user.username)
      .cart.filter((cartPizza) => cartPizza.id !== id);
    localStorage.setItem("Current user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(users));
    setData(currentUser);
  };
  return (
    <div className={style.card}>
      <img src={img} alt="#" width="150px" height="150px" />
      <div className={style.card_info}>
        <p className={style.card_info_name}>{name}</p>
        <p className={style.card_info_price}>${price}</p>
      </div>
      <div className={style.card_input}>
        <button disabled={input === 1} onClick={() => decreaseCount()}>
          -
        </button>
        <input type="number" value={input} min={0} readOnly />
        <button disabled={input === 30} onClick={() => increaseCount()}>
          +
        </button>
      </div>
      <img
        onClick={() => {
          deleteCard();
          notify("Item was deleted from cart!", "succ");
        }}
        className={style.card_delete}
        src="./img/Path.svg"
        alt="delete"
      />
    </div>
  );
}
