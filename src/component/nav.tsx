import logo from '../assets/logo-text.png'


export default function Nav(){
    return(
        <div className='flex justify-between items-center py-4 container mx-auto sticky top-0'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='flex items-center gap-3 text-lg'>
                    <li><a className='text-pink-400 font-bold' href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className='flex gap-3'>
                <button className='text-lg'>Sign In</button>
                <button className="btn btn-secondary rounded-full text-lg">Sign UP</button>
            </div>
        </div>
    )
}