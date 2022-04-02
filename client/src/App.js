import '../src/style/css/ArtistProfile.css';
import '../src/style/css/Home.css'
import '../src/style/css/SignUp.css'
import '../src/style/css/FilerMenu.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';



//pages
import Home from './pages/Home';
import Map from './pages/Map';
import SignUpArtists from './pages/SignUpArtists';
import SignUpCreatives from './pages/SignUpCreatives';
import EnterRelease from './pages/EnterRelease';
import ReleaseCalendar from './pages/ReleaseCalendar';
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
            exact path='/signUpArtists'
            element={<SignUpArtists />}
          />

          <Route
            exact path='/signUpCreatives'
            element={<SignUpCreatives />}
          />

          <Route
            exact path='/enterRelease'
            element={<EnterRelease />}
          />

          <Route
            exact path='/releases'
            element={<ReleaseCalendar />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

