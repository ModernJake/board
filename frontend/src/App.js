import './assets/css/App.css';
import SuggestBoard from "./components/suggestBoard/SuggestBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuggestBoardDetails from "./components/suggestBoard/SuggestBoardDetails";
import {Container, Nav, Navbar} from "react-bootstrap";

function App() {
  return (
      // <Router>
      //   <nav>
      //     <Link to="/">Home</Link>
      //     <Link to="/accounce-board">공지 게시판</Link>
      //     <Link to="/suggest-board">건의 게시판</Link>
      //     <Link to="/about">About</Link>
      //   </nav>
      //   <Routes>
      //     <Route path="/" exact element={<h1>Home</h1>} />
      //     <Route path="/announce-board" element={<SuggestBoard/>} />
      //     <Route path="/suggest-board" element={<SuggestBoard/>} />
      //     <Route path="/suggest-board/details" element={<SuggestBoardDetails/>} />
      //     <Route path="/about" element={<h1>About</h1>} />
      //   </Routes>
      // </Router>

    <Router>
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Jake's Minecraft</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/announce-board">공지 게시판</Nav.Link>
                        <Nav.Link as={Link} to="/suggest-board">건의 게시판</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Main Content */}
        <Container className="mt-4">
            <Routes>
                <Route path="/" exact element={<h1>Home</h1>} />
                <Route path="/announce-board" element={<></>} />
                <Route path="/suggest-board" element={<SuggestBoard />} />
                <Route path="/suggest-board/details" element={<SuggestBoardDetails />} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
        </Container>
    </Router>
  );
}

export default App;
