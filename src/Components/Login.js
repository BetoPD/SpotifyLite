import { URL } from "../Material/spotify";
import { useEffect } from "react";
import styles from "../Styles/Login.module.css";

export default function Login({ setToken }) {
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  });
  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className={styles.container}>
      <button className={styles.login} onClick={handleClick}>
        Login
      </button>
      ;
    </div>
  );
}
