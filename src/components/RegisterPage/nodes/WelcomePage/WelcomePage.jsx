import style from "./WelcomePage.module.css";

export default function WelcomePage({
  loginActive,
  signinActive,
  setLoginActive,
  setSigninActive,
}) {
  return (
    <div
      style={{ display: loginActive || signinActive ? "none" : "flex" }}
      className={style.register_content}
    >
      <div className={style.register_information}>
        <p className={style.register_information_title}>
          Welcome to <span style={{ fontWeight: 800 }}>Pizza</span> Restaurant
        </p>
        <p className={style.register_information_subtitle}>
          People eat with their eyes and Pizza creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          className={style.register_button}
          onClick={() => setLoginActive(true)}
        >
          LOG IN
        </button>
        <button
          className={style.register_button}
          onClick={() => setSigninActive(true)}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
