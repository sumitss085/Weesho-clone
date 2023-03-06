

import './App.css';
import MainNavbar from './Component/MainNavbar/Main';


import AllRoutes from './Component/Routes/AllRoutes';
import Subnavbar from './Component/Subnavbar/Subnavbar';

function App() {
  return (
    <div className="App">
     
      <MainNavbar/>
      <Subnavbar/>
     <AllRoutes/>
    </div>

  );
}

export default App;
