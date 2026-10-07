import { useContext } from "react"
import TemperatureContext from "../context/TemperatureContext"

export default function FooterThermostatSection() {

    const { temperature } = useContext(TemperatureContext)
  

    return (
        <div className="badge text-bg-info d-flex align-items-center fs-5">
            {temperature} °C
        </div> 
    )
} 