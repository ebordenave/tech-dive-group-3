import './App.css';
import { useApi } from './hooks/use-api';

import { Outlet, redirect } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  const { response } = useApi();
  
  return (
    <>
    {/* all the other elements */}
    <NavBar />
    <div id="detail">
      <Outlet />
    </div>
  </>
  );
}

export default App;
