import '../src/style/css/ArtistProfile.css';
import '../src/style/css/Home.css'
import '../src/style/css/SignUp.css'
import '../src/style/css/FilerMenu.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';



//pages
import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';
import Map from './pages/Map';
import SignUp from './pages/SignUp';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            exact path='/impressum'
            element={<Impressum />}
          />

          <Route
            exact path='/datenschutz'
            element={<Datenschutz />}

          />

          <Route
            exact path="/"
            element={<Home />}
          />

          <Route 
            exact path="/map"
            element={<Map />}
          />

          <Route 
            exact path="/map/:artistName"
            element={<ArtistProfile />}
          />

          <Route  
            exact path='/signUp'
            element={<SignUp />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

