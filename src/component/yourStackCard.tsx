import {type Dispatch, type SetStateAction } from "react"
import type { ITechnologyType } from "../type/technologyType"
import { IoMdClose } from "react-icons/io"

interface SelectedTechnologyProps{
    selectedTechnology:ITechnologyType[]
    setSelectedTechnology:Dispatch<SetStateAction<ITechnologyType[]>>
    
}

export default function YourStackCard({selectedTechnology, setSelectedTechnology}:SelectedTechnologyProps){


    const handleRemoveSelectedTechnology=(id:number)=>{
        const remainingTechnology= selectedTechnology.filter((technology)=>technology.id!==id)
        setSelectedTechnology(remainingTechnology)
        
    }


    return(
        <div>
            {selectedTechnology.map((technology)=>{
                return(
                    <div className="flex justify-between items-center border-2 border-gray-300 p-2 rounded-xl mb-2" key={technology.id}>

                        <div className="flex items-center gap-4">
                            <img className="w-12" src={technology.icon} alt={technology.name} />
                            <div>
                                <h1 className="text-xl font-bold">{technology.name}</h1>
                                <p className="text-md">{technology.category}</p>
                            </div>
                        </div>
                        <span onClick={()=>handleRemoveSelectedTechnology(technology.id)}><IoMdClose className="text-3xl text-gray-400" /></span>
                    </div>
                ) 
                
            })}
        </div>
        
    )
}