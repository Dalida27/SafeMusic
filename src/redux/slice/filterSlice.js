import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredProducts: []
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_BY_SEARCH(state, action) {
            const { products, search } = action.payload
            const tempProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()) || product.singer.toLowerCase().includes(search.toLowerCase()))

            state.filteredProducts = tempProducts
        },

        SORT_PRODUCTS(state, action) {
            const { products, sort } = action.payload
            let tempProducts = []

            if (sort === "latest") {
                tempProducts = products;
            }

            if (sort === "lowest-price") {
                tempProducts = products.slice().sort((a, b) => {
                    return a.price - b.price
                });
            }

            if (sort === "highest-price") {
                tempProducts = products.slice().sort((a, b) => {
                    return b.price - a.price
                });
            }

            if (sort === "a-z") {
                tempProducts = products.slice().sort((a, b) => {
                    return a.title.localeCompare(b.title)
                });
            }

            if (sort === "z-a") {
                tempProducts = products.slice().sort((a, b) => {
                    return b.title.localeCompare(a.title)
                });
            }

            state.filteredProducts = tempProducts
        },

        FILTER_BY_GENRE(state, action) {
            const { products, genre } = action.payload
            let tempProducts = []
            if (genre === "Все") {
                tempProducts = products
            } else {
                tempProducts = products.filter((product) => product.genre === genre)
            }
            state.filteredProducts = tempProducts
        },

        FILTER_BY_CONDITION(state, action) {
            const { products, condition } = action.payload
            let tempProducts = []
            if (condition === "Все") {
                tempProducts = products
            } else {
                tempProducts = products.filter((product) => product.condition === condition)
            }
            state.filteredProducts = tempProducts
        },

        FILTER_BY_PRICE(state, action) {
            const {products, price} = action.payload
            let tempProducts = []
            tempProducts = products.filter((product) => product.price <= price);

            state.filteredProducts = tempProducts
        }

    }
});

export const { FILTER_BY_SEARCH, SORT_PRODUCTS, FILTER_BY_GENRE, FILTER_BY_CONDITION, FILTER_BY_PRICE } = filterSlice.actions

export const selectFilteredProducts = (state) => state.filter.filteredProducts

export default filterSlice.reducer