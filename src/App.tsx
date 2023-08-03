import { useState, createContext } from "react";
import "./App.css";
import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const NameContext = createContext<string>("");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NameApp />} />
        <Route path="/users/:id" element={<Ciao />} />
      </Routes>
    </BrowserRouter>
  );
}

function Ciao() {
  const { id } = useParams();
  return (
    <div>
      <Link to={"/"}>CIAO ID: {id}</Link>
    </div>
  );
}

function NameApp() {
  const [name, setName] = useState("PIPPO");

  return (
    <NameContext.Provider value={name}>
      <Section />
      <button className="px-2" onClick={() => setName((prev) => prev + "x")}>
        ADD X
      </button>
    </NameContext.Provider>
  );
}

export default App;

function Name() {
  const name = useContext(NameContext);
  return <div className="">HELLO {name}</div>;
}

function Section() {
  return (
    <div>
      <h1>TITLE</h1>
      <Name />
    </div>
  );
}
