import banner from '../assets/banner-stack.png'

export default function Banner(){
    return(
        <div className='grid grid-cols-2 items-center container mx-auto'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Build Your Ideal</h1>
                <h1 className="text-4xl font-bold bg-linear-to-r from-orange-500 to-violet-800 bg-clip-text text-transparent">Development Stack</h1>
                <p className='text-lg'>Explore fronted, backend, database, and tooling ooptions, compare them side by side, and put together the stack that fits your next project</p>
                <div className='flex gap-2'>
                    <button className="btn btn-active btn-secondary text-lg bg-linear-to-r from-orange-500 to-pink-600 ">Explore Technologies</button>
                    <button className="btn btn-outline text-lg">Default</button>
                </div>
            </div>
            
            <div className='justify-self-end'>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}