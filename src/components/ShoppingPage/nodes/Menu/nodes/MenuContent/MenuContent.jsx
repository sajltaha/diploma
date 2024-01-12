import style from "./MenuContent.module.css";

export default function MenuContent({
  showPizzaData,
  data,
  id,
  name,
  img,
  price,
}) {
  return (
    <div onClick={() => showPizzaData(id, data)} key={id}>
      <img src={img} alt={name} width="280px" height="280px" />
      <p className={style.menu_content_name}>{name}</p>
      <p className={style.menu_content_price}>${price}</p>
    </div>
  );
}
