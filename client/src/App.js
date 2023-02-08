import './App.css';
import { useApi } from './hooks/use-api';

import { redirect } from "react-router-dom";

function App() {
  const { response } = useApi();
  
  return (
    <div className="App"></div>
  );
}

export default App;
