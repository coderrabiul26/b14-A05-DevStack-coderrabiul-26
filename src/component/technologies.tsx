import { use, useState } from "react";
import type { ITechnologyType } from "../type/technologyType";
import TechnologyCard from "./technologyCard";
import YourStackCard from "./yourStackCard";
import { toast } from "react-toastify"

interface ITechnologiesProps {
  dataPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ dataPromise }: ITechnologiesProps) {
  const technologies = use(dataPromise);

  const [selectedTechnology, setSelectedTechnology] = useState<ITechnologyType[]>([]);

  const handleRemoveAllSelectedTechnology=()=>{
    setSelectedTechnology([])
    toast.warning('All technology removed')
  }
  

  return (
    <div className="container mx-auto">
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold"> Explore the <span className="text-pink-500">Technologies</span></h1>
            <p className="text-lg"> Pick one technology per category to build your ideal stack</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mt-5">
            <div className="md:col-span-2 lg:col-span-9 lg:mr-5 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                    {technologies.map((technology) => (<TechnologyCard key={technology.id} technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></TechnologyCard>))}
                </div>
            </div>
            <div className="col-span-3 ">
                <div className="border-3 border-gray-200 rounded-3xl p-5">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold mb-2">Your Stack</h1>
                        <span className="text-lg">
                            {selectedTechnology.length===0? 'No technologies selected yet':`${selectedTechnology.length} Technology Selected`}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                    {
                        selectedTechnology.length===0? (
                            <p className="text-xl border-2 border-gray-300 rounded-lg p-8 text-center">Your stack is empty</p>
                        ):( 
                        <>
                            <YourStackCard selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></YourStackCard> 
                            
                             <button onClick={()=>handleRemoveAllSelectedTechnology()} className="btn btn-outline btn-secondary my-3 font-bold 
                            rounded-lg text-lg p-5"> Remove All</button>
                        </>
                            
                        )}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
