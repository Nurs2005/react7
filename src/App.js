// import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
// import HomePage from './pages/HomePage';
// import NotFound from './pages/NotFound';
// import BlockPage from './pages/BlockPage';
// import AboutePage from './pages/AboutePage';
import LivePAge from './LivePage/LivePage';
function App() {
  return (
    <div className="App">
      <LivePAge/>
      {/* <header className='navbar'>
        <Link to="/">dfg</Link>
        <Link to="/block">dfg</Link>
        <Link to="/abou">dfg</Link>
      </header>
      <main>
        content
      </main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/block' element={<BlockPage/>}></Route>
        <Route path='/about' element={<AboutePage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
