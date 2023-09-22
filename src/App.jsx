import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsSettler from "./components/NewsSettler";

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Analytics />
     <NewsSettler />
     <Cards />
     <Footer />
    </div>
  );
};

export default App;