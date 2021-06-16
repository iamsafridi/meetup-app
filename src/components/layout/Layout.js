import MainNavBar from "./MainNavBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
