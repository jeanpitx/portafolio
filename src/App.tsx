import { Header } from "./sections/Header"
import { Proyectos } from "./sections/Proyectos";
import { SobreMi } from "./sections/SobreMi";
import { Experiencia } from "./sections/Experiencia";
import { Footer } from "./sections/Footer";
import { Contacto } from "./sections/Contacto";
import Navbar from "./components/NavBar";
import { ThemeContextProvider, LangContextProvider } from "./context";
import { CvPrint } from "./components/CvPrint";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <ThemeContextProvider>
        <LangContextProvider>
          <Navbar />
          <Header />
          <Proyectos />
          <SobreMi />
          <Experiencia />
          <Contacto />
          <Footer />
          <CvPrint />
        </LangContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
