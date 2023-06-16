import { configureStore } from "@reduxjs/toolkit"; //Redux Toolkit is a library that provides simplified abstractions and utilities for working with Redux, a predictable state management library for JavaScript applications. configureStore is a function provided by Redux Toolkit that helps in configuring and creating a Redux store.
import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
        
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});