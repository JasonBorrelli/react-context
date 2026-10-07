import { useContext } from "react"
import TemperatureContext from "../context/TemperatureContext"

export default function SideBar() {

    const { resetTemperature } = useContext(TemperatureContext)

    return (
        <aside className="w-25 px-3 border-end text-center mt-3">
           <h4 className="h6">sideBar</h4>
           <button onClick={resetTemperature} className="btn bg-success text-white fw-bold"> Reset</button>
           
        </aside>     
    )
}