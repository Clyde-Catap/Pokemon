export default function EvolvesTo({ evolvesToArray }) {


    function getEvolutionChain(evolvesToArray){
        let final_evolutions = {};
        if (evolvesToArray['chain'])
            if (evolvesToArray.chain.EvolvesTo){
                final_evolutions[0] = evolvesToArray.chain.species.name;

            }
        }
    

    return (
        <>
            {Array.isArray(evolvesToArray) && evolvesToArray.map((item, index) => (
                <p key={index} className="text-black">
                    If a dog chews shoes, whose shoes does he choose?
                </p>
            ))}
        </>
    );
}
