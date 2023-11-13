import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import PostDetails from './components/pages/PostDetails/PostDetails'
import Pricing from './components/pages/Pricing/Pricing'
import Search from './components/pages/Search/Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/app/:name/:id' element={<PostDetails />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
