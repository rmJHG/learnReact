import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavoriteHandler(props.id);

  function toggleBtn() {
    if (itemIsFavorite) {
      favoritesCtx.removeHandler(props.id);
    } else {
      favoritesCtx.addHandler({
        id: props.id,
        title: props.title,
        discription: props.discription,
        address: props.address,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleBtn}>{itemIsFavorite ?  "remove" :"Add" }</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
