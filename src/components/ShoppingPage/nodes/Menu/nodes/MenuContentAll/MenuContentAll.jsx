import MenuContent from "../MenuContent/MenuContent";
import style from "./MenuContentAll.module.css";

export default function MenuContentAll({
  dataBig,
  showPizzaData,
  dataMid,
  dataSmall,
}) {
  return (
    <>
      <div className={style.menu_content_big}>
        {dataBig.map((pizza) => {
          return (
            <MenuContent
              key={pizza.id}
              showPizzaData={showPizzaData}
              data={dataBig}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
            />
          );
        })}
      </div>

      <div className={style.menu_content_mid}>
        {dataMid.map((pizza) => {
          return (
            <MenuContent
              key={pizza.id}
              showPizzaData={showPizzaData}
              data={dataMid}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
            />
          );
        })}
      </div>

      <div className={style.menu_content_small}>
        {dataSmall.map((pizza) => {
          return (
            <MenuContent
              key={pizza.id}
              showPizzaData={showPizzaData}
              data={dataSmall}
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
