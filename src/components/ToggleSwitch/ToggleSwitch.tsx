import styles from "./ToggleSwitch.module.scss";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { onClick } = props;
  const switchHandler = () => onClick();

  return (
    <div className={styles.SwitchContainer}>
      <label className={styles.Toggle}>
        <input type="checkbox" onChange={switchHandler} />
        <span className={styles.ToggleMark} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
