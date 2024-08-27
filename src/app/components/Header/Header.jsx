export default function Header(){
    return(
        <header className=" flex justify-center items-center ">
            <ul className=" w-[50%] mt-6 text-white flex justify-between scroll-smooth">

                <li>
                    <a href="#">INICIO</a>
                </li>
                                
                <li><a href="#EXPERIENCIA" className="hover:underline">EXPERIENCIA</a></li>
                
                <li><a href="#">CONTACTO</a></li>
                
            </ul>
        </header>
    )
}