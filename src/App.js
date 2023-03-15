import './App.css';
import { Footer,  Nav, Sidebar, Homepage } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
