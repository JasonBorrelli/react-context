import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import MainContent from "./components/layout/MainContent"
import SideBar from "./components/layout/sideBar"
import {TemperatureContextProvider} from "./components/context/TemperatureContext"

function App() { 

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <TemperatureContextProvider> 
        <div className="d-flex flex-grow-1 gap-3">
          <SideBar />
          <MainContent />         
        </div>
        <Footer/>
      </TemperatureContextProvider>
    </div>
  )
 
}
export default App
