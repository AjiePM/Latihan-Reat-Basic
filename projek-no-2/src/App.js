import {Link, Route, Routes} from "react-router-dom"
import './App.css';

import Post from './Artis/Artis';

function App() {
  return (
    <>
    <ul>
      <li> <Link to ='/Artis/1'>Randi Pangalia</Link></li>
      <li> <Link to ='/Artis/2'>Dedi Corbuser</Link></li>
      <li> <Link to ='/Artis/3'>Inul Daratistas</Link></li>
      <li> <Link to ='/Artis/4'>Sule</Link></li>
      <li> <Link to ='/Artis/5'>Andre</Link></li>
      <li> <Link to ='/Artis/6'>Udin</Link></li>
      <li> <Link to ='/Artis/7'>Pesulap Merah</Link></li>
      <li> <Link to ='/Artis/8'>Cupi Cupita</Link></li>
      <li> <Link to ='/Artis/9'>Dewi Persik</Link></li>
      <li> <Link to ='/Artis/10'>Doni</Link></li>
      <li> <Link to ='/Artis/11'> Jaka Tingkir</Link></li>
      <li> <Link to ='/Artis/12'>Fiki </Link></li>
      <li> <Link to ='/Artis/13'>Daus Mini </Link></li>
      <li> <Link to ='/Artis/14'>Dodi Sudrajad</Link></li>
      <li> <Link to ='/Artis/15'>Demien</Link></li>
    </ul>
    <Routes>
      <Route path = '/Artias/:nama_post'element ={<Post/>}/>
    </Routes>
    </>
   
   
  );
}

export default App;