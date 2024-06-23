import bug from '../../../assets/types/bug.webp';
import dark from '../../../assets/types/dark.webp';
import dragon from '../../../assets/types/dragon.webp';
import electric from '../../../assets/types/electric.webp';
import fairy from '../../../assets/types/fairy.webp';
import fighting from '../../../assets/types/fighting.webp';
import fire from '../../../assets/types/fire.webp';
import flying from '../../../assets/types/flying.webp';
import ghost from '../../../assets/types/ghost.webp';
import grass from '../../../assets/types/grass.webp';
import ground from '../../../assets/types/ground.webp';
import ice from '../../../assets/types/ice.webp';
import normal from '../../../assets/types/normal.webp';
import poison from '../../../assets/types/poison.webp';
import psychic from '../../../assets/types/psychic.webp';
import rock from '../../../assets/types/rock.webp';
import steel from '../../../assets/types/steel.webp';
import water from '../../../assets/types/water.webp';

const typeImages = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water
};

const imageSize = "h-7 w-7 rounded";

export default function Type({ typesArray }) {
  const type = "h-1/6 flex justify-left items-center";
  const innerDiv = "flex items-center m-2";
  const h1Class = "m-2";

  return (
    <div className={type}>
      {typesArray.map((item, index) => (
        <div key={index} className={innerDiv}>
          <img src={typeImages[item.type.name]} className={imageSize} alt={`${item.type.name} icon`} />
          <h1 className={h1Class}>{item.type.name}</h1>
        </div>
      ))}
    </div>
  );
}
