import {
    bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water
} from './../../assets';

type PokemonChipProps = {
    colorCode: string;
    typeName: string;
}

function chipImage(type: string) {
    switch(type) {
        case 'bug': return bug;
        case 'dark': return dark;
        case 'dragon': return dragon;
        case 'electric': return electric;
        case 'fairy': return fairy;
        case 'fighting': return fighting;
        case 'fire': return fire;
        case 'flying': return flying;
        case 'ghost': return ghost;
        case 'grass': return grass;
        case 'ground': return ground;
        case 'ice': return ice;
        case 'normal': return normal;
        case 'poison': return poison;
        case 'psychic': return psychic;
        case 'rock': return rock;
        case 'steel': return steel;
        case 'water': return water;
        default: return null; // You might want to handle an unknown type
    }
}

const PokemonTypeChip: React.FC<PokemonChipProps> = ({
    typeName, colorCode
}) => {
    const image = chipImage(typeName);

    return (
        <div style={{ backgroundColor: colorCode, padding: '8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {image && <img src={image} alt={typeName} style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
            <span style={{ color: 'white' }}>{typeName}</span>
        </div>
    );
}

export default PokemonTypeChip;
