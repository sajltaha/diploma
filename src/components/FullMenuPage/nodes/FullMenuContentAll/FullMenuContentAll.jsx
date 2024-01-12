import MenuContent from "../../../ShoppingPage/nodes/Menu/nodes/MenuContent/MenuContent";
import style from "./FullMenuContentAll.module.css";

export default function FullMenuContentAll({
  searchInput,
  setSearchInput,
  setSelectValue,
  data,
  showPizzaData,
  alert,
}) {
  return (
    <>
      <div className={style.fullMenu_sorter}>
        <input
          type="text"
          value={searchInput}
          onChange={(el) => setSearchInput(el.target.value)}
          placeholder="Search for pizza..."
        />
        <select onChange={(el) => setSelectValue(el.target.value)}>
          <option value="All">All</option>
          <option value="Price">Price</option>
          <option value="Name">A - Z</option>
        </select>
      </div>

      <div
        className={style.fullMenu_alert}
        style={{ display: alert ? "block" : "none" }}
      >
        <p>Can not find!</p>
      </div>

      <div className={style.fullMenu_content}>
        {data.map((pizza) => {
          return (
            <MenuContent
              key={pizza.id}
              showPizzaData={showPizzaData}
              data={data}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
            />
          );
        })}
      </div>
    </>
  );
}
