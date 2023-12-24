// store.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon/pokemonSlice';
import statsReduce from './stats/statsSlice'

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        stats: statsReduce
    },
});

export default store;
