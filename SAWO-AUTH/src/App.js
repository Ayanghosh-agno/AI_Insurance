import React from "react";
// import logo from "./logo.svg";
import "./App.css";

/* This imports Dashboard Component*/
import Dashboard from './components/Dashboard'

import Sawo from "sawo";
function App() {

  /* We are creating a state, using the useState hook. */

  let [payload, setPayload] = React.useState(false);

  /*
  This makes sure when the component is rendered, 
  it is called only once.
  */
  React.useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: "daf248cf-2112-4dcd-90df-50e966a0f5f2",
      onSuccess: (payload) => {
        // console.log(payload); 
        setPayload(payload)
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);


  return (
    <>
    <div class="containerStyle hero">
      <h1>VIRTUAL INSURANCE AGENCY(AYAN GHOSH)</h1>
    <div
        class="formContainer"
        id="sawo-container"
        style={{ height: "300px", width: "300px" }}
      ></div>
    </div>
     { payload && (
        <div>
          <Dashboard payload={payload} />
        </div>
      )}
    </>

  );
}

export default App;