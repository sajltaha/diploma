import { RxCross1 } from "react-icons/rx";
import style from "./EventsModal.module.css";

export default function EventsModal({
  setModal,
  setTextValue,
  textValue,
  notify,
}) {
  return (
    <div className={style.events_modal_content}>
      <RxCross1
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={() => {
          setModal(false);
          setTextValue("");
        }}
      />
      <textarea
        placeholder="Write details about event you want to celebrate here..."
        value={textValue}
        onChange={(el) => setTextValue(el.target.value)}
      ></textarea>
      <button
        disabled={!textValue}
        onClick={() => {
          setModal(false);
          setTextValue("");
          notify();
        }}
      >
        Send
      </button>
    </div>
  );
}
