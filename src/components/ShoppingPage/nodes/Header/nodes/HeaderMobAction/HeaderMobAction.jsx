import style from "./HeaderMobAction.module.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

export default function HeaderMobAction({ setModal, modal, navigate }) {
  return (
    <div className={style.header_mob_action}>
      <p className={style.header_mob_logo}>LA PIZZA POPOLARE</p>
      <img
        src="./img/burger.svg"
        alt="burger"
        onClick={() => setModal(true)}
        width="25px"
        height="25px"
      />
      <div
        style={{ display: modal ? "flex" : "none" }}
        className={style.header_mob_modal}
      >
        <div className={style.header_mob_modal_content}>
          <ul>
            <RxCross1
              onClick={() => setModal(false)}
              style={{ width: "25px", height: "25px" }}
            />
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="menu"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="teams"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Our team
              </Link>
            </li>
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="events"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="footer"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Contacts
              </Link>
            </li>
            <button
              className={style.header_button}
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>
            <button
              className={style.header_button}
              onClick={() => navigate("/")}
            >
              Log Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
