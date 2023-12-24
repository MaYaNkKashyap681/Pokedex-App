import PokemonLogo from '../../../assets/logo-pokemon.svg';
import { pokemonTypes } from '../../../pokemonTypesData';

const Navbar = () => {
  return (
    <nav className=' fixed top-0 left-0 right-0 z-[30] bg-black'>
      <div className=' px-8 py-2'>
        <img src={PokemonLogo} />
      </div>
      <div className='h-1 w-screen neonYellow mt-2'></div>
    </nav>
  )
}

export default Navbar