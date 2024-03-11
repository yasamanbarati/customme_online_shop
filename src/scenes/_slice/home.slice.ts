import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ReduxBodyType, productCategoriesType } from "./type"

const initialState: ReduxBodyType = {
  productCategories: []
}

const setproductCategories = (
  state: ReduxBodyType,
  action: PayloadAction<productCategoriesType[]>,
) => {
  state.productCategories = action.payload
}

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {setproductCategories},
})

const { actions } = homeSlice

export const {setproductCategories:setproductCategoriesAction} = actions

export default homeSlice.reducer
