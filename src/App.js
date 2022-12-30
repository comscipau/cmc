import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-justBlack">
      <Navbar />
      <Hero />
      <Membership />
    </div>
  );
}

export default App;
