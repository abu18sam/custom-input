// import logo from "./logo.svg";
import "./App.css";
import CustomCheckboxLabel from "./components/customInput/customCheckboxLabel/CustomCheckboxLabel";
import CustomRadio from "./components/customInput/customRadio/CustomRadio";
import CustomCheckbox from "./components/customInput/customCheckbox/CustomCheckbox";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "auto", width: "100vw", height: "100px" }}>
        <CustomCheckbox
          value="Checkbox 1"
          label=""
          onChange={(e) => {
            console.log(e.target.value);
            console.log(e.target.checked);
          }}
        />
      </div>
      {/* <div style={{ margin: "auto", width: "100vw", height: "100px" }}>
        </CustomCheckboxLabel></CustomCheckbox></CustomCheckboxLabel></CustomCheckbox>
        <CustomCheckboxLabel
          value={"Name1"}
          label={"Label 1"}
          id={"custom-checbox-1"}
          onChange={(e) => console.log(e.target.checked, e.target.value)}
        />
        <CustomCheckboxLabel
          value={"Name2"}
          label={"Label 2"}
          id={"custom-checbox-2"}
          onChange={(e) => console.log(e.target.checked, e.target.value)}
        />
        
      </div> */}
      <div
        style={{ margin: "auto", width: "100vw", height: "100px" }}
        onChange={(e) => console.log(e.target.value)}
      >
        <p>Radio</p>
        <CustomRadio
          value={"Name1"}
          name="radio1"
          label={"Custom 1"}
          onChange={(e) => console.log(e.target.value)}
        />
        <CustomRadio
          value={"Name2"}
          name="radio1"
          label={"Custom 2"}
          checked={true}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
