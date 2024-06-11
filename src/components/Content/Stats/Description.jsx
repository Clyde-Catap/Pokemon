export default function Description()
{
    const outerDiv = "p-2";
    const infoDiv = "card bg-sky-950 shadow-xl p-4";

    return(
        <div className={outerDiv}>
            <div className={infoDiv}>
                <div className="card-body">
                    <h2 className="card-title text-black">Description:</h2>
                    <p className="text-black">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end ">
                    <button className="btn btn-primary text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}