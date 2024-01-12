import { useState } from "react";
import style from "./Events.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsModal from "./nodes/EventsModal/EventsModal";

export default function Events() {
  const [modal, setModal] = useState(false);
  const [textValue, setTextValue] = useState("");

  const arr = [1, 2, 3, 4];

  const notify = () => toast.success("We will contact you within 3 hours");

  return (
    <div className={style.events_container}>
      <div className={style.events_content}>
        <p className={style.events_welcome}>Events</p>
        <div className={style.events_cards}>
          {arr.map((num) => {
            return (
              <div
                className={style.events_cards_card}
                key={num}
                onClick={() => setModal(true)}
              >
                <div>
                  <p>Corporate Events</p>
                </div>
                <img src={`./img/rec${num}.svg`} alt={num} />
              </div>
            );
          })}
        </div>
        <div
          style={{ display: modal ? "flex" : "none" }}
          className={style.events_modal}
        >
          <EventsModal
            setModal={setModal}
            setTextValue={setTextValue}
            textValue={textValue}
            notify={notify}
          />
        </div>
      </div>
    </div>
  );
}
