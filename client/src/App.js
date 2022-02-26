import '../src/style/css/ArtistProfile.css';
import '../src/style/css/Home.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';



//pages
import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';
import Map from './pages/Map';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';


//components
//import Nav from './components/Nav'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            exact path='/key'
            element={<Welcome />}
          />

          <Route
            exact path="/"
            element={<Home />}
          />

          <Route 
            exact path="/VPcpfJADsmwQqmurzmhr"
            element={<Map />}
          />

          <Route 
            exact path="/VPcpfJADsmwQqmurzmhr/:artistName"
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

