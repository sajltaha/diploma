import { useEffect, useState } from "react";
import api from "../../libs/api.json";
import style from "./FullMenuPage.module.css";
import { useNavigate } from "react-router-dom";
import { addPizzaToCart } from "../../libs/Menu_functions";
import MenuModal from "../ShoppingPage/nodes/Menu/nodes/MenuModal/MenuModal";
import FullMenuContentAll from "./nodes/FullMenuContentAll/FullMenuContentAll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FullMenuPage() {
  const [data, setData] = useState([]);
  const [pizza, setPizza] = useState("");
  const [countInput, setCountInput] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const notify = () => toast.success("Succesfully added to cart!");

  useEffect(() => {
    setData(api);
  }, []);

  useEffect(() => {
    setData(
      selectValue === "All"
        ? api
        : [...data].sort((a, b) =>
            selectValue === "Price"
              ? a.price - b.price
              : a.name.localeCompare(b.name)
          )
    );
  }, [selectValue]);

  useEffect(() => {
    const filteredData = searchInput
      ? api.filter((pizza) =>
          pizza.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : api;

    setData(filteredData);
    setAlert(searchInput && filteredData.length === 0);
  }, [searchInput]);

  const showPizzaData = (id) => {
    const findPizza = data.find((pizza) => pizza.id === id);
    setPizza(findPizza);
  };

  const req_addPizzaToCart = () => {
    addPizzaToCart(
      pizza.id,
      countInput,
      pizza.name,
      pizza.price,
      pizza.img,
      setPizza,
      setCountInput
    );
  };

  return (
    <>
      <div className={style.fullMenu_container}>
        <div className={style.fullMenu_welcome}>
          <p className={style.fullMenu_welcome_title}>Menu</p>
          <p className={style.fullMenu_welcome_subtitle}>
            Lacus lobortis nullam nam consectetur fermentum mattis pellentesque
            id nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
            Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor
            egestas nam congue elit dolor.
          </p>
        </div>
        <FullMenuContentAll
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSelectValue={setSelectValue}
          data={data}
          showPizzaData={showPizzaData}
          alert={alert}
        />
        <div
          className={style.fullMenu_modal}
          style={{ display: pizza ? "block" : "none" }}
        >
          <MenuModal
            setPizza={setPizza}
            setInput={setCountInput}
            img={pizza.img}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            input={countInput}
            addPizzaToCart={req_addPizzaToCart}
            notify={notify}
          />
        </div>
        <img
          src="./img/allpizzabutton.svg"
          alt="button"
          width="50px"
          height="50px"
          onClick={() => navigate("/shopping")}
          className={style.fullMenu_container_button}
        />
      </div>
    </>
  );
}
