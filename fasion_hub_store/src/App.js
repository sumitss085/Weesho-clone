import "./App.css";
import EmptyCart from "./Component/EmptyCart/EmptyCart";
import Navbar from "./Component/Navbar/Navbar";

import AllRoutes from "./Component/Routes/AllRoutes";



import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>

     <AllRoutes/> */}
      {/* <EmptyCart/> */}

      <Navbar />

      <AllRoutes />

      {/* <Login/> */}
    </div>
  );
}

export default App;
