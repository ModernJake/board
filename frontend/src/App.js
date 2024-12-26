import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import SuggestBoard from "./components/SuggestBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/accounce-board">공지 게시판</Link>
          <Link to="/suggest-board">건의 게시판</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<h1>Home</h1>} />
          <Route path="/announce-board" element={<SuggestBoard/>} />
          <Route path="/suggest-board" element={<SuggestBoard/>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </Router>
  );
}

// function App() {
//   return (
//       <>
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//         <div>
//           <SuggestBoard/>
//         </div>
//       </>
//   );
// }

export default App;
