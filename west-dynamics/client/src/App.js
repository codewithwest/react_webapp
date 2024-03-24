import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Tabs from './components/Tabs';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api").then((res) => res.json())
    .then((data) => setData(data));
  },[]
  );
  console.log(data);
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>{!data ? " Loading..." : data}</p>
      </header>
    </div>
    */
    <div>
    <h1>WEST DYNAMICS</h1>
    <h1>{!data ? "Loading..." : data[0].name}</h1>
    <Tabs/>
    <footer><a href='https://westdynamics.tech'>
      westdynamics.tech
      </a></footer>
  </div>
  );
  
}
export default App;