import { Header } from "./sections/Header"
import { Proyectos } from "./sections/Proyectos";
import { SobreMi } from "./sections/SobreMi";
import { Experiencia } from "./sections/Experiencia";
import { Footer } from "./sections/Footer";
import { Contacto } from "./sections/Contacto";
import Navbar from "./components/NavBar";
import { ThemeContextProvider } from "./context";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Proyectos />
        <SobreMi />
        <Experiencia />
        <Contacto />
        <Footer />
      </ThemeContextProvider>
    </div>
  )
}

export default App
