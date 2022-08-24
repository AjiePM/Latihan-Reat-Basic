import {Link, Route, Routes} from "react-router-dom"
import './App.css';

import Post from './Artis/Artis';

function App() {
  return (
    <>
    <ul>
      <li> <Link to ='/Artis/Randi_Pangalila'>Randi Pangalia</Link></li>
      <li> <Link to ='/Artis/Dedi_Corbuser'>Dedi Corbuser</Link></li>
      <li> <Link to ='/Artis/Inul_Daratista'>Inul Daratistas</Link></li>
      <li> <Link to ='/Artis/sule'>Sule</Link></li>
      <li> <Link to ='/Artis/Andre'>Andre</Link></li>
      <li> <Link to ='/Artis/Udin'>Udin</Link></li>
      <li> <Link to ='/Artis/Pesulap_merah'>Pesulap Merah</Link></li>
      <li> <Link to ='/Artis/Cupi_Cupita'>Cupi Cupita</Link></li>
      <li> <Link to ='/Artis/Dewi_persik'>Dewi Persik</Link></li>
      <li> <Link to ='/Artis/Doni'>Doni</Link></li>
      <li> <Link to ='/Artis/Jaka'> Jaka Tingkir</Link></li>
      <li> <Link to ='/Artis/Fiki'>Fiki </Link></li>
      <li> <Link to ='/Artis/Daus_Mini'>Daus Mini </Link></li>
      <li> <Link to ='/Artis/Dodi_Sudrajad'>Dodi Sudrajad</Link></li>
      <li> <Link to ='/Artis/Demien'>Demien</Link></li>
    </ul>
    <Routes>
      <Route path = '/Artis/:nama_artis'element ={<Post/>}/>
    </Routes>
    </>
   

  );
}

export default App;