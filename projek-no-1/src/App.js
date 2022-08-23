
import {Link, Route, Routes} from "react-router-dom"
import './App.css';

import Home from './peges/Home/Home';
import Profil from './peges/Profil/Profil';
import Gallery from './peges//Gallery/Gallery';
import Music from './peges//Music/Music';
import Film from './peges//Film/Film';


function App() {
  return (
    <>
    <ul>
      <li> <Link to ='/'>Home</Link></li>
      <li> <Link to ='/Profil'>Profil</Link></li>
      <li> <Link to ='/Gallery'>Gallery</Link></li>
      <li> <Link to ='/Music'>Music</Link></li>
      <li> <Link to ='/Film'>Film</Link></li>
   

    </ul>
    <Routes>
      <Route path = '/'element ={<Home/>}/>
      <Route path = '/Profil'element ={<Profil/>}/>
      <Route path = '/Gallery'element ={<Gallery/>}/>
      <Route path = '/Music'element ={<Music/>}/>
      <Route path = '/Film'element ={<Film/>}/>
    </Routes>
    </>
   
   
  );
}

export default App;
