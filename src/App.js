import Nav from './components/Navbar/Nav';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-500 text-white">
      <Nav />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
