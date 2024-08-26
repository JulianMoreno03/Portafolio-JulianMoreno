import Header from "./components/Header/Header";
import MainContacto from "./components/Main/MainContacto"
import MainInformation from "./components/Main/MainInformation";
export default function Home() {
  return (
    <main >
      <Header/>

      <div className="flex justify-center items-center ">
      <MainInformation/>
      
      </div>
      
      <MainContacto/>

    </main>
  );
}
