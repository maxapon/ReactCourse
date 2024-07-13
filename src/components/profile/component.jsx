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
  const { userName, userEnter, userExit, isUserInSystem } = UseUser();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInlineDiv}>
        <img
          className={styles.profileImg}
          src={isUserInSystem() ? defaultUserImg.IMG2 : defaultUserImg.IMG1}
        ></img>
      </div>
      <div className={styles.profileInlineDiv}>
        <p className={styles.profileText}>{userName}</p>
        <button
          onClick={() => {
            isUserInSystem() ? userExit() : userEnter(defaultUserName);
          }}
          className={classNames(styles.profileBtn, {
            [styles.profileBtnLight]: theme === ThemeTypes.LIGHT,
            [styles.profileBtnDark]: theme === ThemeTypes.DARK,
          })}
        >
          {isUserInSystem() ? "Exit" : "Enter"}
        </button>
      </div>
    </div>
  );
};
