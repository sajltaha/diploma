import { useState } from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import HeaderAction from "./nodes/HeaderAction/HeaderAction";
import HeaderMobAction from "./nodes/HeaderMobAction/HeaderMobAction";

export default function Header() {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={style.header_container}>
      <nav>
        <HeaderAction navigate={navigate} />
        <HeaderMobAction navigate={navigate} modal={modal} setModal={setModal} />
      </nav>
      <div className={style.header_text}>
        <p>Made by Napoletans.</p>
        <p>Loved by all.</p>
      </div>
    </div>
  );
}
