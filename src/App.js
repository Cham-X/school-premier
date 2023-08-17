import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <>
        <MainContent />
      </>
    </div>
  );
}

export default App;
