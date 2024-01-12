import style from "./Menu.module.css";
import api from "../../../../libs/api.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPizzaToCart } from "../../../../libs/Menu_functions";
import MenuModal from "./nodes/MenuModal/MenuModal";
import MenuContentAll from "./nodes/MenuContentAll/MenuContentAll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Menu() {
  const [dataBig, setDataBig] = useState([]);
  const [dataMid, setDataMid] = useState([]);
  const [dataSmall, setDataSmall] = useState([]);
  const [pizza, setPizza] = useState("");
  const [input, setInput] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setDataBig(api.slice(0, 8));
    setDataMid(api.slice(0, 4));
    setDataSmall(api.slice(0, 3));
  }, []);

  const req_addPizzaToCart = () => {
    addPizzaToCart(
      pizza.id,
      input,
      pizza.name,
      pizza.price,
      pizza.img,
      setPizza,
      setInput
    );
  };

  const showPizzaData = (id, data) => {
    const findPizza = data.find((pizza) => pizza.id === id);
    setPizza(findPizza);
  };

  const notify = () => toast.success("Succesfully added to cart!");

  return (
    <div className={style.menu_container}>
      <div className={style.menu_welcome}>
        <p className={style.menu_welcome_title}>Menu</p>
        <p className={style.menu_welcome_subtitle}>
          Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id
          nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
          Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor
          egestas nam congue elit dolor.
        </p>
      </div>

      <MenuContentAll
        dataBig={dataBig}
        dataMid={dataMid}
        dataSmall={dataSmall}
        showPizzaData={showPizzaData}
      />

      <div
        style={{ display: pizza ? "block" : "none" }}
        className={style.menu_modal}
      >
        <MenuModal
          setPizza={setPizza}
          setInput={setInput}
          img={pizza.img}
          name={pizza.name}
          price={pizza.price}
          description={pizza.description}
          input={input}
          addPizzaToCart={req_addPizzaToCart}
          notify={notify}
        />
      </div>

      <img
        src="./img/allpizzabutton.svg"
        alt="button"
        width="50px"
        height="50px"
        onClick={() => navigate("/fullmenu")}
        className={style.menu_container_button}
      />
    </div>
  );
}
