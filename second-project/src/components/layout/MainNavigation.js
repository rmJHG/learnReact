import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Nav</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/second">SecondPage</Link>
          </li>
          <li>
            <Link to="/third">ThirdPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
