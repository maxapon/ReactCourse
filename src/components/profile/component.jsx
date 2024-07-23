import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme, ThemeTypes } from "../theme-context/component";
import { useUser } from "../user-context/component";

const defaultUserName = "user";

export const Profile = () => {
  const { theme } = useTheme();
  const { user, userEnter, userExit } = useUser();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInlineDiv}>
        <img className={styles.profileImg} src={user.profileImg}></img>
      </div>
      <div className={styles.profileInlineDiv}>
        <p className={styles.profileText}>{user.userName}</p>
        <button
          onClick={() => {
            user.isAutorize
              ? userExit()
              : userEnter({ userName: "user", email: "email@mail.ru" });
          }}
          className={classNames(styles.profileBtn, {
            [styles.profileBtnLight]: theme === ThemeTypes.LIGHT,
            [styles.profileBtnDark]: theme === ThemeTypes.DARK,
          })}
        >
          {user.isAutorize ? "Exit" : "Enter"}
        </button>
      </div>
    </div>
  );
};
