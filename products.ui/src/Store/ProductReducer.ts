import { Product } from "../Model/Product";

export interface GlobalState {
  Products: Product[];
  Total: number;
}

export const initialState: GlobalState = {
  Products: [],
  Total: 0
}

type ProductsActions = { type: "FETCH_PRODUCTS_ACTION", payload: GlobalState}

export const ProductReducer = (state: GlobalState = initialState, action: ProductsActions) => {
  switch(action.type){
    case "FETCH_PRODUCTS_ACTION":
      return {...state}
  }
}
