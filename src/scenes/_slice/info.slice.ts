import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ReduxBodyType } from "./type"

const initialState: ReduxBodyType = {}

export const infoSlice = createSlice({
  name: "info",
  initialState: initialState,
  reducers: {},
})

const { actions } = infoSlice

export const {} = actions

export default infoSlice.reducer
