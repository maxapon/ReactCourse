import styles from "./styles.module.css";
import classNames from "classnames";
import { UseTheme, ThemeTypes } from "../theme-context/component";
import { UseUser } from "../user-context/component";

const defaultUserName = "user";

const defaultUserImg = {
  IMG1: "/src/resources/user.png",
  IMG2: "/src/resources/userEnter.png",
};

export const Profile = () => {
  const { theme } = UseTheme();
  const { user, userEnter, userExit } = UseUser();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInlineDiv}>
        <img
          className={styles.profileImg}
          src={user.isAutorize ? defaultUserImg.IMG2 : defaultUserImg.IMG1}
        ></img>
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
