// statsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../../types/Pokemon';

interface PokemonExtended extends Pokemon {
  pokemonImage: string
}

interface StatsState {
  pokemonDetails: PokemonExtended | null,
}

const initialState: StatsState = {
  pokemonDetails: null,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setPokemonStats: (state, action: PayloadAction<PokemonExtended>) => {
      state.pokemonDetails = action.payload;
    },
    removePokemonStats: (state) => {
      state.pokemonDetails = null;
    },
  },
});

export const { setPokemonStats, removePokemonStats } = statsSlice.actions;
export default statsSlice.reducer;
