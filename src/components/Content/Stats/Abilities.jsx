export default function Abilities({ abilitiesArray }) {
    const generationsDiv = "justify-center items-center";
    const h1Class = "m-2"
  
    return (
      <div className={generationsDiv}>
        {abilitiesArray.map((item, index) => (
          <h1 key={index} className={h1Class}>{item.ability.name}</h1>
        ))}
      </div>
    );
  }
  