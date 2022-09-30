// import logo from "./logo.svg";
import { useCallback, useState } from "react";
import "./App.css";
import CustomCheckboxLabel from "./components/customInput/customCheckboxLabel/CustomCheckboxLabel";
import CustomRadio from "./components/customInput/customRadio/CustomRadio";
import CustomCheckbox, {
  CustomCheckboxGroup,
} from "./components/customInput/customCheckbox/CustomCheckbox";

const checkboxList = [
  {
    value: "Regular",
    label: "Regular",
    id: 1,
  },
  {
    value: "Carnival",
    label: "Carnival",
    id: 2,
  },
  {
    value: "House Ads",
    label: "House Ads",
    id: 3,
  },
  {
    value: "Website Ads",
    label: "Website Ads",
    id: 4,
  },
];

function App() {
  const [checksList, setChecksList] = useState([...checkboxList]);

  const getSelectedItem = useCallback(
    (item) => {
      try {
        console.log("item === ", item);
      } catch (error) {
        console.log(error);
      }
    },
    [setChecksList]
  );

  const handleSubmit = useCallback(() => {
    let list = checksList.filter((x) => x.checked).map((item) => item.value);
    console.log("list === ", list);
  }, [checksList]);

  return (
    <div className="App">
      <div style={{ margin: "auto", width: "100vw", height: "100px" }}>
        <p>Checkbox</p>
        <div style={{ textAlign: "left", paddingLeft: "5px" }}>
          <CustomCheckboxGroup
            checkboxList={checksList}
            getSelectedItem={getSelectedItem}
          />
        </div>

        <button onClick={handleSubmit}>Apply</button>
        <br />
        <br />
        <br />

        {/* <CustomCheckbox
          value="Regular"
          label="Regular"
          name="type"
          onChange={(e) => {
            console.log(e.target.value);
            console.log(e.target.name);
            console.log(e.target.checked);
          }}
        />
         */}
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
        {/* <CustomRadio
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
        /> */}
      </div>
    </div>
  );
}

export default App;
