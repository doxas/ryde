
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  layer: React.ReactNode;
};

function Layout({children, layer}: LayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
      </div>
      <div className={styles.layer}>
        {layer}
      </div>
    </>
  );
}

export default Layout;
