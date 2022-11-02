import { createContext, useState } from "react";

export const NFTContext = createContext({
  user: {},
  //   addNFT: (id) => {},
  //   removeFavorite: (id) => {},
});

function NFTContextProvider({ children }) {
  //   const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  //   function addNFT(id) {
  //     setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  //   }

  //   function removeFavorite(id) {
  //     setFavoriteMealIds((currentFavIds) =>
  //       currentFavIds.filter((mealId) => mealId !== id)
  //     );
  //   }

  const value = {
    // ids: favoriteMealIds,
    // addFavorite: addFavorite,
    // removeFavorite: removeFavorite,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
}

export default NFTContextProvider;
