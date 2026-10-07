import { useContext } from "react"
import TemperatureContext from "../context/TemperatureContext"


export default function ThermostatSection() {
  const { temperature, increaseTemperature, decreaseTemperature, resetTemperature } = useContext(TemperatureContext)
  


    return (
        <section> 
            <h2 className="text-center">Smart Home: Thermostat</h2>
            <div className="border w-50 p-4 bg-secondary text-white mt-5 rounded-4 shadow-lg border-black mx-auto">
                <div className="text-center m-2 border  p-4 bg-black rounded-4 shadow-lg border-black mx-auto">
                    <h3 className="mb-2">Temperatura attuale</h3>
                
                    <div className="display-1 mb-3"> {temperature}°C </div>
                    <div className="thermostat-controls d-flex justify-content-center gap-5">
                        <button onClick={decreaseTemperature} className="btn bg-primary text-white cursor-pointer hover:bg-blue-300 fw-bold"> - </button>
                        <button onClick={resetTemperature} className="btn bg-success text-white cursor-pointer hover:bg-blue-300 fw-bold"> Reset </button>
                        <button onClick={increaseTemperature} className="btn bg-danger text-white cursor-pointer hover:bg-blue-300 fw-bold"> + </button>
                    </div>
                </div>
            </div>
        </section>
    )
}