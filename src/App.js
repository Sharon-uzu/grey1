import './App.css';
import Landing from './Screens/Landing';
import { Route, Routes } from 'react-router-dom';
import Order from './Screens/Order';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Order' element={<Order/>} />
    </Routes>
        


   
    </div>
  );
}

export default App;
