import { use, useState } from "react";
import type { ITechnologyType } from "../type/technologyType";
import TechnologyCard from "./technologyCard";
import YourStackCard from "./yourStackCard";

interface ITechnologiesProps {
  dataPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ dataPromise }: ITechnologiesProps) {
  const technologies = use(dataPromise);

  const [selectedTechnology, setSelectedTechnology] = useState<ITechnologyType[]>([]);

  const handleRemoveAllSelectedTechnology=()=>{
    setSelectedTechnology([])
  }

  return (
    <div className="container mx-auto">
        <div>
            <h1 className="text-3xl font-bold"> Explore the <span className="text-pink-500">Technologies</span></h1>
            <p className="text-lg"> Pick one technology per category to build your ideal stack</p>
        </div>
        <div className="grid grid-cols-12 mt-5">
            <div className="col-span-9 mr-5">
                <div className="grid grid-cols-3 gap-4"> 
                    {technologies.map((technology) => (<TechnologyCard key={technology.id} technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></TechnologyCard>))}
                </div>
            </div>
            <div className="col-span-3 ">
                <div className="border-3 border-gray-200 rounded-3xl p-5">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold mb-2">Your Stack</h1>
                        <span className="text-lg">{selectedTechnology.length} Technology Selected</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <YourStackCard selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></YourStackCard>
                        <button onClick={()=>handleRemoveAllSelectedTechnology()} className="btn btn-outline btn-secondary my-3 font-bold rounded-lg text-lg p-5"> Remove All</button>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
