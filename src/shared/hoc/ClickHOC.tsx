import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pokemonTypeChange } from './../../shared/store/pokemon/pokemonSlice'

const ClickHOC: React.FC<{
  children: React.ReactNode,
  pokemonType: string
}> = ({ children, pokemonType }) => {

  const dispatch = useDispatch();

  const handleClickTypeChage = (type: string) => {

    const pokemonType = type === "All Pokemons" ? null : type;
    dispatch(pokemonTypeChange(pokemonType));
  }
  return (
    <div className='cursor-pointer' onClick={() => handleClickTypeChage(pokemonType)}>
      {children}
    </div>
  )
}

export default ClickHOC