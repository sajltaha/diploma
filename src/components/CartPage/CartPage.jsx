import { useEffect, useState } from "react";
import style from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import CartPageAction from "./nodes/CartPageAction/CartPageAction";
import CartPageItem from "./nodes/CartPageItem/CartPageItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {
  const [data, setData] = useState({ cart: [] });
  const [totalPrice, setTotalPrice] = useState(0);
  const [promo, setPromo] = useState("");
  const [promoCount, setPromoCount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    setData(currentUser);
  }, []);

  useEffect(() => {
    let price = calculatePrice();
    setTotalPrice(price);
  }, [data]);

  useEffect(() => {
    if (totalPrice === 0) {
      setPromo("");
    }
  }, [totalPrice]);

  const calculatePrice = () => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    let price = currentUser.cart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    if (promoCount) {
      price -= price * 0.1;
    }
    return price;
  };

  const addPromo = () => {
    setPromoCount(true);
    setTotalPrice(totalPrice - totalPrice * 0.1);
  };

  const confirmOrder = () => {
    const currentUser = JSON.parse(localStorage.getItem("Current user"));
    const users = JSON.parse(localStorage.getItem("Users"));
    setTotalPrice(0);
    setPromo("");
    setPromoCount(false);
    currentUser.cart = [];
    users.find((user) => currentUser.username === user.username).cart = [];
    localStorage.setItem("Current user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(users));
    setData(currentUser);
  };

  const notify = (text, type) => {
    if (type === "info") {
      toast.info(text);
    } else {
      toast.success(text);
    }
  };

  return (
    <div className={style.cart_container}>
      <div className={style.cart_welcome}>
        <p>Cart</p>
        <div></div>
      </div>
      <div className={style.cart_content}>
        <div className={style.cart_content_cart}>
          {data.cart.map((pizza) => {
            return (
              <CartPageItem
                key={pizza.id}
                price={pizza.price}
                name={pizza.name}
                img={pizza.img}
                count={pizza.count}
                id={pizza.id}
                setData={setData}
                notify={notify}
              />
            );
          })}
          <p
            style={{ display: data.cart.length > 0 ? "none" : "block" }}
            className={style.cart_content_cart_alert}
          >
            Empty cart!
          </p>
        </div>
        <CartPageAction
          totalPrice={totalPrice}
          confirmOrder={confirmOrder}
          promo={promo}
          promoCount={promoCount}
          setPromo={setPromo}
          addPromo={addPromo}
          notify={notify}
        />
      </div>
      <img
        src="./img/allpizzabutton.svg"
        alt="button"
        width="50px"
        height="50px"
        onClick={() => navigate("/shopping")}
        className={style.cart_container_button}
      />
    </div>
  );
}
