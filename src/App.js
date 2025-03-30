import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes // Use Routes instead of Switch
} from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDatail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> {/* Wrap the routes inside Routes instead of Switch */}
          <Route path="/about" element={<About />} /> {/* Use 'element' instead of 'children' */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
