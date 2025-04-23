import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Location from "./components/Location";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Phone from "./components/Phone";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Header />
      <Model />
      <Cases />
      <Location />
      <Footer />
      <Phone />
      <ScrollToTop />
    </div>
  );
}

export default App;
