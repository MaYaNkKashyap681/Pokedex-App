import { pokemonTypes } from "../../pokemonTypesData";
import ClickHOC from "../hoc/ClickHOC";
import PokemonTypeChip from './PokemonTypeChip'; // Make sure to import your PokemonTypeChip component

const TypeChips = () => {
    return (
        <div className="mt-[2rem] flex items-center gap-4 flex-wrap">
            <h2 className="text-white text-xl font-bold">Search Pokemon by Type:</h2>
            {pokemonTypes.map((type, index) => (
                <ClickHOC pokemonType={type.name} key = {index}>
                    <PokemonTypeChip key={index} typeName={type.name} colorCode={type.color} />
                </ClickHOC>
            ))}
        </div>
    );
}

export default TypeChips;
