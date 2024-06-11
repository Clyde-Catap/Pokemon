import right from '../../../assets/right.png';
import left from '../../../assets/left.png';

export default function Sprites()
{
    const spritesDiv = "w-3/6 p-4";
    const generationsDiv = "h-1/6 flex justify-center items-center";

    const pictureOuterDiv = "flex justify-center p-4";
    const pictureDiv = "card w-96 bg-base-100 shadow-xl p-4 flex-grow";
    const buttonDiv = "flex items-center p-10";

    return(
        <div className={spritesDiv}>
            <div className={pictureOuterDiv}>
                <div className={buttonDiv}>
                    <button className="btn btn-circle">
                        <img src={left} alt="custom icon" className="w-full h-full" />                    
                    </button>
                </div>
                <div className={pictureDiv}>
                    <figure className="px-30 pt-30">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={buttonDiv}>
                    <button className="btn btn-circle">
                        <img src={right} alt="custom icon" className="w-full h-full" />                    
                    </button>
                </div>
            </div>

            <div className={generationsDiv}>
                <h1>Generation 1, Generation 2, Generation 3</h1>
            </div>
        </div>
    );
}