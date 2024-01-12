import { useEffect, useState } from "react";
import style from "./OurTeams.module.css";
import teamData from "../../../../libs/team.json";

export default function OurTeams() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(teamData);
  }, []);

  return (
    <div className={style.teams_container}>
      <div className={style.teams_content}>
        <div className={style.teams_content_welcome}>
          <p className={style.teams_content_welcome_title}>Our team</p>
          <p className={style.teams_content_welcome_subtitle}>
            In velit auctor non auctor in. Id pellentesque facilisis at lectus
            sed in sit tellus mauris.
          </p>
        </div>
        <div className={style.teams_content_cards}>
          {data.map((worker) => {
            return (
              <div className={style.worker_card} key={worker.name}>
                <img src={worker.img} alt="img" width="290px" height="365px" />
                <p className={style.worker_name}>{worker.name}</p>
                <p className={style.worker_profession}>{worker.profession}</p>
                <p className={style.worker_description}>{worker.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
