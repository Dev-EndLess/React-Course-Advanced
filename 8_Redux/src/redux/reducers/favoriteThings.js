export function addFavoriteThings(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing
  }
}

export function removeFavoriteThing(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing
  }
}

export default function FavoriteThings(favoriteThings = [], action) {
  switch(action.type) {
    case "ADD_FAVORITE_THING":
      return [...favoriteThings, action.payload]
    case "REMOVE_FAVORITE_THING":
      const updateArray = favoriteThings.filter(thing => thing !== action.payload)
      return updateArray
    default:
      return favoriteThings
  }
}