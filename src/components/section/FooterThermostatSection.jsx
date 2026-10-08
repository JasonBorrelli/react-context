import { useContext } from "react"
import TemperatureContext from "../context/TemperatureContext"

export default function FooterThermostatSection() {

    const { temperature, coldMode } = useContext(TemperatureContext)


    return (
        <div className="badge text-bg-info d-flex align-items-center fs-5">
            {temperature} °C {coldMode()}
        </div>
    )  
} 