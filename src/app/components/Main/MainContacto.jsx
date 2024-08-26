import Image from "next/image"
export default function MainContacto() {
    return (
        <section className=" flex justify-center items-center gap-6 mt-8">


            <a href="https://github.com/JulianMoreno03" target="_blank">
                <Image src="icons/git.svg"
                    className=" shadow-lg hover:shadow-purple-950 rounded-full duration-200 cursor-pointer hover:scale-110"
                    width={50}
                    height={50}
                    alt="Imagen del autor" />
            </a>

            <a href="https://www.linkedin.com/in/julian-benjamin-moreno-castillo-665723245/" target="_blank">
                <Image src="icons/linkedin.svg"
                    className="shadow-lg hover:shadow-blue-900 rounded-full duration-200 cursor-pointer"
                    width={50}
                    height={50}
                    alt="Imagen del autor" />

            </a>

            <a href="mailto:julianmoreno0304@gmail.com?subject=Asunto%20del%20Correo&body=Mensaje%20predeterminado" target="_blank">
                <Image src="icons/email.svg"
                    className="shadow-lg hover:shadow-orange-900 rounded-full duration-200 cursor-pointer"
                    width={50}
                    height={50}
                    alt="Imagen del autor" />
            </a>

        </section>

    )
}