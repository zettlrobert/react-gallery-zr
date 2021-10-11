import styles from './TopBar.module.scss';

const TopBar = (props: any) => {
  const { children } = props;
  return <header className={styles.TopBar}>{children}</header>;
};

export default TopBar;
