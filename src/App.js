import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <Navbar />
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
