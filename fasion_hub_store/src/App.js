
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { WomenSaree } from './Component/Navbar/WomenSaree';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>

    </div>
  );
}

export default App;
