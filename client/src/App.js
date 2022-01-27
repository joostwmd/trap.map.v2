import '../src/style/css/ArtistProfile.css';
import '../src/style/css/Home.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//pages
import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';
import Map from './pages/Map';


//components
//import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            exact path="/home"
            element={<Home />}
          />

          <Route 
            exact path="/"
            element={<Map />}
          />

          <Route 
            exact path="/:artistName"
            element={<ArtistProfile />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

