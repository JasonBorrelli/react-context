import {createContext, useState} from "react" 
import {useContext} from "react"

//1.Creazione del Context
const TemperatureContext = createContext();

//2.Definizione del componente provider
export function TemperatureContextProvider({ children }) {
    //state


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
       <TemperatureContext.Provider value={{ temperature, coldMode,increaseTemperature,
            decreaseTemperature,
            resetTemperature}}>
            {children}
        </TemperatureContext.Provider>                                                                                                                       
    )
}

//Custom Hook per consumare il context
export function useTemperatureContext() {
    const context = useContext(TemperatureContext);
    if (!context) {
        throw new Error("Temperature not found in the context");
    }
    return context;
} 
 
export default TemperatureContext
 