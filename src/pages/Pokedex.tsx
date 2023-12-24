import PokemonList from "../shared/components/PokemonList"
import SearchBar from "../shared/components/SearchBar"
import TypeChips from "../shared/components/TypeChips"


const Pokedex = () => {
 

  return (
    <div className="">
      <div>
        <SearchBar />
        <TypeChips />
      </div>
      <PokemonList />
    </div>
  )
}

export default Pokedex