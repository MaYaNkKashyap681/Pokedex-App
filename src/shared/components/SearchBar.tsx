import { ChangeEvent } from 'react';
import search from '../../assets/icon-search.svg';

import { changePokemons, searchPokemon } from '../store/pokemon/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../../api/fetchPokemon';
import { toast } from 'react-toastify';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchPokemon(e.target.value));
  }

  const pokemonName = useSelector((state: any) => state.pokemon.searchString);

  const handleClick = async () => {
    try {
      dispatch(changePokemons([]));
      const res = await fetchPokemon(pokemonName);
      if (res && res.data) {
        const data = [
          {
            name: res.data.name,
            id: res.data.id,
            types: res.data.types,
            weight: res.data.weight,
            height: res.data.height,
            stats: res.data.stats

          }
        ];
        dispatch(changePokemons(data));
      }
      else {
        dispatch(changePokemons([]));
      }
    }
    catch (err) {
      toast.error('Cannot Find Pokemon');
    }finally {
      dispatch(searchPokemon(""));
    }
  }

  return (
    <div className='flex items-center w-[80%] mx-auto bg-red-500 '>
      <div className='w-full bg-black  border-[2px] border-red-500 p-3'>
        <input type="text" className='w-full bg-transparent focus:outline-none text-xl font-bold' spellCheck={false}
          onChange={handleChange}
          placeholder='Search Pokemon Name...' />
      </div>
      <div className='flex items-center justify-center bg-red-500 w-[20%] cursor-pointer' onClick={handleClick}>
        <img src={search} alt="search icon" />
      </div>
    </div>
  )

}

export default SearchBar