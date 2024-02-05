import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import Sidebar from './components/shared/Sidebar';
import Products from './components/Products';


function App() {
  return (
    // creating routes for navigation
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar/>}>
          <Route index element={<Products/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
