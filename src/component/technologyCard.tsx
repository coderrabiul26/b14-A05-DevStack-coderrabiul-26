import { FaStar } from "react-icons/fa"
import type { ITechnologyType } from "../type/technologyType"
import { useState, type Dispatch, type SetStateAction } from "react"
import { toast } from "react-toastify"

interface ITechnologyProps{
    technology:ITechnologyType
    selectedTechnology:ITechnologyType[]
    setSelectedTechnology:Dispatch<SetStateAction<ITechnologyType[]>>
}

export default function TechnologyCard({technology, selectedTechnology, setSelectedTechnology}:ITechnologyProps){

       const [isSelected, setIsSelected]=useState(false)

       const handleIsSelected=()=>{
            setIsSelected(true)
            toast.success(`{${technology.name} is added to stack`)
            setSelectedTechnology([...selectedTechnology, technology])
       }
       

    return(
        <div className={`flex flex-col border-3 ${isSelected? 'border-pink-400':'border-gray-200'}  rounded-3xl p-5`}>
            <div className="flex justify-between">
                <img className="w-20" src={technology.icon} alt="" />
                <button className="btn btn-info rounded-full">{technology.badge}</button>

            </div>
            <div>
                <h1 className="text-3xl font-bold mb-3">{technology.name}</h1>
                <p className="text-lg">{technology.description}</p>
            </div>
            <div className="flex justify-between items-center my-4 text-lg">
                <button className="btn btn-soft text-lg">{technology.category}</button>
                <span>{technology.difficulty}</span>
                <span className="flex gap-2 items-center font-bold"><FaStar className="text-yellow-400 "/>{technology.rating}</span>

            </div>
            <button onClick={()=>handleIsSelected()} className={`${isSelected? 'btn btn-primary': 'btn btn-neutral'} rounded-xl`} disabled={isSelected} >{isSelected? '✓ Added to Stack': 'Add to Stack'}</button>
            
            
        </div>
    )
}