
import style from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  layer: React.ReactNode;
};

function Layout({children, layer}: LayoutProps): JSX.Element {
  return (
    <>
      <div className={style.wrapper}>
        {children}
      </div>
      <div className={style.layer}>
        {layer}
      </div>
    </>
  );
}

export default Layout;
