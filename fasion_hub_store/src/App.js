
import './App.css';
import Navbar from './Component/Navbar/Navbar';

import { WomenSaree } from './Component/Navbar/WomenSaree';
import { AllRoutes } from './Routes/AllRoutes';

import Login from './Pages/Login/Login';
import JewelrySets from './Pages/Jewelry/JeweleyList/JewelrySets';


function App() {
  return (
    <div className="App">
     <Navbar/>

     <AllRoutes/>


     {/* <Login/> */}

    </div>
  );
}

export default App;
