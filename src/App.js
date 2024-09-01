import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/dealroom' element={<h1>Deal Room</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
