import Header from "./components/header/Header";
import './app.css'
import Toures from "./components/toure/Toures";
import AboutToure from "./components/about-toure/about-toure";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentBus from "./components/rent-bus/rent-bus";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route  path='/' element={<Toures/>}/>
      <Route  path='/rentbus' element={<RentBus/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
