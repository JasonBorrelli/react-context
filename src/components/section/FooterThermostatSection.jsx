import { useTemperatureContext } from "../context/TemperatureContext" 

export default function FooterThermostatSection() {

    const { temperature, coldMode } = useTemperatureContext()  
    

    return (
        <div className="badge text-bg-info d-flex align-items-center fs-5">
            {temperature} °C {coldMode()}
        </div>
    )  
} 