import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import ProductDetails from "./pages/ProductDetails.json"

export interface ProductDetailsProps {
    id: string;
    title: string;
    description: string;
    price: string;
    colors: {
        name: string;
        link: string;
        header: string
        images: string[];
    }[]
}

interface DataProps {
    data: ProductDetailsProps[]
}

const initialState: DataProps = {data: ProductDetails as ProductDetailsProps[]}

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    updateObject(state, action: PayloadAction<Partial<Record<string, any>>>) {
      state.data = { ...state.data, ...action.payload }; // Merge update
    }
  }
});

export const { updateObject } = mySlice.actions;

export const store = configureStore({
  reducer: {
    mySlice: mySlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;