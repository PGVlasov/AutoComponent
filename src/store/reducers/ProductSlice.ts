import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ProductState {
    products: IProduct[];
}

const initialState: ProductState = {
    products: [
        { id: 1, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 2, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 3, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 4, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 5, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 6, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 7, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 8, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 9, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 10, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 11, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
        { id: 12, title: "Электродвигатель стеклоочистителя ВАЗ-2123,1118, 2170-2190 передний н/о ", amount: 1, price: 234941 },
    ]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export default productSlice.reducer;