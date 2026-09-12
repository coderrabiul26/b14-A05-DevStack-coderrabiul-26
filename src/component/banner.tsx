import banner from '../assets/banner-stack.png'

export default function Banner(){
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center container mx-auto'>
            <div className='flex flex-col gap-2 md:gap-5 justify-center'>
                <h1 className='text-center md:text-left text-2xl md:text-4xl font-bold'>Build Your Ideal</h1>
                <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold bg-linear-to-r from-orange-500 to-violet-800 bg-clip-text text-transparent">Development Stack</h1>
                <p className='text-md md:text-lg text-center md:text-left'>Explore fronted, backend, database, and tooling ooptions, compare them side by side, and put together the stack that fits your next project</p>
                <div className='flex gap-2 justify-center md:justify-start mt-3'>
                    <button className="btn btn-active btn-secondary text-lg bg-linear-to-r from-orange-500 to-pink-600 ">Explore Technologies</button>
                    <button className="btn btn-outline text-lg">Learn More</button>
                </div>
            </div>
            
            <div className='md:block mx-auto md:justify-self-end'>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}