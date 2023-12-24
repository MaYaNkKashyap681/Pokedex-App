import { pokemonTypes } from "../../pokemonTypesData"
import { Pokemon } from "../../types/Pokemon"
import PokemonTypeChip from "./PokemonTypeChip";

import bolt from '../../assets/icon-bolt.svg';
import weightIcon from '../../assets/icon-weight.svg';
import rulerIcon from '../../assets/icon-ruler.svg';
import { useState } from "react";
import StatsModel from "./StatsModel";


const getColorCode = (type: string): string => {

  const lowerCaseType = type.toLowerCase();
  const foundType = pokemonTypes.find((pokemonType) => pokemonType.name === lowerCaseType);
  return foundType ? foundType.color : "#000000";
}


const PokemonCard: React.FC<Pokemon> = ({
  id,
  name,
  height,
  weight,
  types,
  stats,
}) => {

  const pType = types[0].type.name;
  const colorCode = getColorCode(pType);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`

  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModel((prev) => !prev)
  }


  return (

    <div className="flex flex-col items-center">
      <div className="z-[8]">
        <img src={imgUrl} alt={`${name} Image`} className="w-[20rem] mb-[-4rem]" />
      </div>
      <div className="border-[0.3px] rounded-xl w-full flex flex-col items-center p-8 h-[26rem] relative overflow-hidden" style={{
        borderColor: colorCode
      }}>

        {
          openModel ? <>
            <StatsModel stats={stats} />
          </> : <>
            <div className="w-[12rem] h-[12rem] rounded-full bg-green-200 absolute top-0 blur-[8rem]"
              style={{
                background: colorCode
              }}></div>
            <div className="mt-[4rem] z-[10] flex items-center flex-col">
              <div className="font-semibold text-xl">
                #{id}
              </div>
              <div className="mt-[2rem]">
                <h1 className="text-4xl font-bold text-white">{name.toUpperCase()}</h1>
              </div>
              <div className="flex gap-x-2 mt-[2rem]">
                {
                  types.map((pokemontype, index) => (
                    <PokemonTypeChip key={index} typeName={pokemontype.type.name} colorCode={getColorCode(pokemontype.type.name)} />
                  ))
                }
              </div>

              <div className="flex items-center justify-center gap-6 mt-[2rem]">
                <div className="flex items-center gap-2">
                  <img src={weightIcon} alt="weight icon" />
                  {weight / 10} kg
                </div>
                <div className="flex items-center gap-2">
                  <img src={rulerIcon} alt="ruler icon" />
                  {height / 10} m
                </div>
              </div>
            </div>
          </>
        }

        <div className="absolute bottom-0 h-[3rem] p-4 left-0 right-0 justify-center flex items-center cursor-pointer hover:bg-opacity-60" style={
          {
            backgroundColor: colorCode
          }
        }
          onClick={handleClick}
        >
          <img src={bolt} alt="bolt icon" />
          <h3 className="text-xl font-light">{openModel ? "Close" : "View Stats"}</h3>
        </div>
      </div>
      {/* <StatsModal stats={stats} pokemonImage={imgUrl}/> */}
    </div>
  )
}

export default PokemonCard