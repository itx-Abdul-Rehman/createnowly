import ContactUs from "./Components/ContactUs"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import OurMission from "./Components/OurMission"
import Services from "./Components/Services"

function App() {
  

  return (
    <div className="bg-[#151515] text-white">
      <Navbar />
      <Main />
      <Services />
      <OurMission />
      <ContactUs />
    </div>
  )
}

export default App
