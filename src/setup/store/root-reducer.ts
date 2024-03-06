import { combineReducers } from "@reduxjs/toolkit"
import { infoSlice } from "scenes/_slice/info.slice"

const rootReducer = combineReducers({
  info: infoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
