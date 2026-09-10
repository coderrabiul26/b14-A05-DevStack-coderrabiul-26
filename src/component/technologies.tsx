import { use } from "react";
import type { ITechnologyType } from "../type/technologyType";
import TechnologyCard from "./technologyCard";

interface ITechnologiesProps{
    dataPromise: Promise<ITechnologyType[]>
}

export default function  Technologies({dataPromise}:ITechnologiesProps){
    const technologies=use(dataPromise)
    console.log(technologies.length);
    return(
        <div className="container mx-auto"> 
            <div>
                <h1>Explore the <span>Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack</p>
            </div>
            <TechnologyCard></TechnologyCard>
            
        </div>
    )
}