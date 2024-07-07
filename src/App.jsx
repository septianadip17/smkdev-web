import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <h1 className="text-3xl font-bold text-red-500 underline text-center">
        haha
      </h1>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
    </>
  );
}

export default App;
