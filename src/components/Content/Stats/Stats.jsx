import Sprites from "./Sprites";
import Info from "./Info";
import Description from "./Description";
import Evolutions from "./Evolutions";

export default function Stats()
{
    const mainDiv = "w-9/12 flex p-5"
    const textDiv = "flex-grow"



    return (
        <div className={mainDiv}>
            <Sprites></Sprites>
            <div className={textDiv}>
                <Info></Info>
                <Description></Description>
                <Evolutions></Evolutions>
            </div>
        </div>
    );
}