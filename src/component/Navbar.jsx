import logo from '../assets/logo.png'
export default function Navbar({}){
    const aClasses = "uppercase font-semibold text-stone-100 active:text-teal-300 hover:text-stone-300 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-600 before:absolute before:bg-gray-100 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-600 after:absolute after:bg-teal-300 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
    return (
        <ul className="w-4/5 px-5 py-2 bg-stone-500/50 z-10 flex justify-between items-center rounded-md border-solid border-white border">
            <li><img className='w-3/5 cursor-pointer' src={logo} alt="" /></li>
            <li>
                <nav className=" flex justify-around gap-20">
                    <a className={aClasses} href="#">Home</a>
                    <a className={aClasses} href="#">About</a>
                    <a className={aClasses} href="#">Community</a>
                    <a className={aClasses} href="#">Gallery</a>
                </nav>
            </li>
            {/* <li>
                <button className="bg-green-500 px-5 py-2 uppercase font-bold text-stone-100 rounded-md border hover:bg-green-600 active:bg-green-900 ">Donate</button>
            </li> */}
        </ul>
    )
}