import logo from "./logo.svg";
import "./App.css";
import CustomCheckboxLabel from "./components/customInput/customCheckbox/CustomCheckbox";
import CustomRadio from "./components/customInput/customRadio/CustomRadio";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{ margin: "auto", width: "100vh", height: "100px" }}>
        checkbox
        <CustomCheckboxLabel
          value={"Name1"}
          label={"Label 1"}
          id={"custom-checbox-1"}
          onChange={(e) => console.log(e.target.checked)}
        />

        {/* <input type="checkbox" style={{borderColor:'green', backgroundColor:"green"}} /> */}
      </div>
      <div style={{ margin: "auto", width: "100vh", height: "100px" }}>
        radio
        <CustomRadio
          value={"Name1"}
          name="radio1"
          label={"Custom 1"}
          onChange={(e) => console.log(e.target.checked)}
        />
        <CustomRadio
          value={"Name2"}
          name="radio1"
          label={"Custom 2"}
          checked={true}
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default App;
