// import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-justBlack overflow-x-hidden">
      <Navbar />
      <Hero />
      <Membership />
      {/* <Collaborations /> */}
      <Footer />
    </div>
  );
}

export default App;
