import Cases from "./components/Cases";
import Header from "./components/Header";
import Location from "./components/Location";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Header />
      <Model />
      <Cases />
      <Location />
    </div>
  );
}

export default App;
