import './App.css';
import PatientsTable from './components/PatientsTable';
import { useApi } from './hooks/use-api';


function App() {
  const { response } = useApi();
  
  return (
    <div className="App">
      {/* <header className="App-header"> */}
          {console.log(response)}
      {/* </header> */}
      <PatientsTable />
    </div>
  );
}

export default App;
