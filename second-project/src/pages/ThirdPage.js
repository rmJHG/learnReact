import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
import { useContext } from "react";

function MyFavorites() {
  const favorites = useContext(FavoritesContext);
let content;
if(favorites.totalFavorites === 0 ) {
    content = <p>아무것도 없음</p>;
} else {
    content = <MeetupList meetups={favorites.favorites} />;
}
  return (
    <div>
      <h1>My Favorites</h1>
    {content}
    </div>
  );
}

export default MyFavorites;
