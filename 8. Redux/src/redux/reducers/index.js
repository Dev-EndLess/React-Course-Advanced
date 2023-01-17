// import the separate reducers
import { combineReducers } from 'redux'

import count from "./count.js"
import favoriteThings from "./favoriteThings"
import youTubeVideos from "./youTubeVideos"

// combine the reducers into a single state tree
const rootReducer = combineReducers({
  count,
  favoriteThings,
  youTubeVideos
})

export default rootReducer