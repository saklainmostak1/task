import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <Button variant='danger'>My Button</Button>
      <Spinner animation="grow" variant="info" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
