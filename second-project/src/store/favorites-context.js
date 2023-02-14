import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addHandler: (favoriteMeetup) => {},
  removeHandler: (meetupsId) => {},
  itemIsHandler: (meetupsId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favorite) {
    setUserFavorites((prev) => {
      return prev.concat(favorite);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addHandler: addFavoriteHandler,
    removeHandler: removeFavoriteHandler,
    itemIsFavoriteHandler : itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
}

export default FavoritesContext;
