import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import MainContent from "./components/layout/MainContent"
import SideBar from "./components/layout/sideBar"
import { useState } from "react"
import TemperatureContext from "./components/context/TemperatureContext"

function App() { 


    const [temperature, setTemperature] = useState(20)
    const cold = temperature < 20;
    const hot = temperature > 25;


   
   
    function coldMode() {
      if(cold) {
        return "freddo"
      } else if (hot) {
        return "caldo"
      } else {
        return "Comfort"
      }
    }
   
    function increaseTemperature() {
      
        setTemperature(actual => (actual < 28 ? actual + 1 : actual))
       
    } 

    function decreaseTemperature() {
     
        setTemperature(actual => actual > 16 ? actual - 1 : actual)
        
    }

    function resetTemperature() { 
        setTemperature(20)
    } 

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <TemperatureContext.Provider value={{ 
            temperature,
            increaseTemperature,
            decreaseTemperature,
            resetTemperature,
            coldMode,
            
        }}>
        <div className="d-flex flex-grow-1 gap-3">
          <SideBar />
          <MainContent />         
        </div>
        <Footer/>
      </TemperatureContext.Provider>
    </div>
  )
 
}
export default App
