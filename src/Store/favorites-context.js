import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavourites] = useState([]);
    
    function addFavoritesHandler(favoriteMeetup) {
        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavouritesHandler(meetupId) {
        setUserFavourites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouritesHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

return 
<FavoritesContext.Provider value={context}>
      {props.children}
</FavoritesContext.Provider>;
}
