import { useState } from "react";
import Stats from "./Stats/Stats";

export default function Content()
{
    const main = "flex flex-grow justify-center";
    const currentComponent = 'stats';
    let comp;
    
    if (currentComponent == 'stats'){
        comp = <Stats></Stats>
    }

    return (
        <main className={main}>
            {comp}
        </main>
    );
}