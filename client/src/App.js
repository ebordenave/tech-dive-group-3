import './App.css';
import ExamsTable from './components/ExamsTable';
import { useApi } from './hooks/use-api';


function App() {
  const { response } = useApi();
  
  return (
    <div className="App">
      <ExamsTable />
    </div>
  );
}

export default App;
