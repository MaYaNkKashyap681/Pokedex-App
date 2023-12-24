// pokemonSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from '../../../types/Pokemon';

interface PokemonState {
    pokemonList: Pokemon[];
    pokemonType: string | null
    searchString: string
}

const initialState: PokemonState = {
    pokemonList: [],
    pokemonType: null,
    searchString: ""
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        appendPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemonList.push(...action.payload);
        },
        changePokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemonList = action.payload;
        },
        removePokemon: (state, action: PayloadAction<number>) => {
            state.pokemonList = state.pokemonList.filter((pokemon) => pokemon.id !== action.payload);
        },
        pokemonTypeChange: (state, action: PayloadAction<string | null>) => {
          state.pokemonType = action.payload  
        },
        searchPokemon: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        }
    },
});

export const { changePokemons, appendPokemons, removePokemon, pokemonTypeChange, searchPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
