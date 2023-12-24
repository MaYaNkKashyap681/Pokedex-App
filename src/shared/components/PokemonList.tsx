import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePokemons, appendPokemons } from './../../shared/store/pokemon/pokemonSlice';
import { Pokemon } from "../../types/Pokemon";
import { fetchPokemonList } from "../../api/fetchPokemonList";
import PokemonCard from "./PokemonCard";
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Adjust the import path as needed
import Loading from "./ui/Loading";
import { fetchPokemonByType } from "../../api/fetchPokemonByType";
import Button from "./ui/Button";



const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemon.pokemonList);
  const pokemonType = useSelector((state: any) => state.pokemon.pokemonType);

  const [pageCount, setPageCount] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Intersection Observer callback
  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.2) {
        setIsVisible(true);
        setPageCount((prevPageCount) => prevPageCount + 1);
      }
    });
  };

  // Ref for Intersection Observer
  const blockRef = useIntersectionObserver(handleIntersect);

  // Fetch Pokemon data based on type or default
  const fetchPokemon = async (count?: number) => {

    if(pageCount > 20) {
      setPageCount(1);
      return;
    }
    try {
      let res: Pokemon[];

      if (pokemonType === null) {
        res = await fetchPokemonList(pageCount);
      } else {
        res = await fetchPokemonByType(pokemonType, count);
      }

      if (pageCount === 1) {
        dispatch(changePokemons(res));
      } else {
        dispatch(appendPokemons(res));
      }

      setIsVisible(false);
    } catch (err) {
      console.error("Error fetching Pokemon:", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const fetchMore = () => {
    fetchPokemon(pokemons.length + 9)
  }

  // Effect to fetch Pokemon data on page count change
  useEffect(() => {
    fetchPokemon();
  }, [pageCount, dispatch]);

  // Effect to handle changes in Pokemon type
  useEffect(() => {
    dispatch(changePokemons([]));
    fetchPokemon();
  }, [pokemonType]);

  return (
    <>
      {
        pokemons.length === 0 ? <div className="w-screen h-screen py-20">
          <Loading />
        </div> : <>
          <div className="h-screen bg-black mt-8 filter backdrop-blur-3xl backdrop-opacity-55 rounded-xl shadow-lg">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4">
              {pokemons.map((pokemon: Pokemon) => (
                <PokemonCard key={pokemon.id} {...pokemon} />
              ))}
            </div>

            {
              pokemonType !== null && <>
                <div className="mt-[1rem]">
                  <Button variant="primary" fullWidth onClick={fetchMore}>
                    Click to get More
                  </Button>
                </div>
              </>
            }

            <div className={`my-[2rem] h-[8rem] flex items-center justify-center ${pokemonType === null ? '' : 'hidden'}`} ref={blockRef}>
              {isVisible && <Loading />}
            </div>
          </div>
        </>
      }
    </>
  );
};

export default PokemonList;
