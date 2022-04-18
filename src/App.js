
import Navigation from './Components/Navigation';
import { Data } from './Data';
import Movieslist from './Components/Movielist'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Moviedetails from './Components/Moviedetails';

function App() {
  const [movies, setMovies] = useState(Data)
  const [search, setSearch]= useState("")
 
  return (
    <div className="App">
 <Navigation search={search} setSearch={setSearch} movies={movies} setMovies={setMovies}/> 


<Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='*' element={<Notfound/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/movies' element={<Movieslist movies={movies} search={search}/>}/>
   <Route path='/movies/:id' element={<Moviedetails movies={movies}/>}/>
</Routes> 
    </div>
  );
}

export default App;
