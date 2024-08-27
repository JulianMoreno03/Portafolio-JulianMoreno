
import Image from "next/image"

export default function MainInformation(){
    return (
    
         <section className="w-[50%] mt-20 grid grid-cols-2 justify-center items-center">
            
            <article className=" ">
           
                <Image 
                className="rounded-3xl"
                src="/autor.webp"
                width={300}
                height={300}
                alt="Imagen del autor"/>
             
            </article>

            <article className=" flex flex-col justify-evenly h-full text-white">
            <h1 className="font-bold text-2xl underline  text-orange-500">SOBRE MI</h1>
            <h1 className="font-bold text-2xl"> JULIAN MORENO</h1>
            <p className="text-gray-300 w-[80%]">Programador Jr FrontEnd, bal bla bla bla Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium?</p>
            </article>  
        </section>

       
        
    )
}