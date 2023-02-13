import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addHandler(favorite) {
    setUserFavorites((prev) => {
      return prev.concat(favorite);
    });
  }
  function removeHandler(meetupId) {
    setUserFavorites(prev=>{
        return prev.filter(meetup => meetup.id !== meetupId)})
  }
  function itemIsHandler() {}
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
