import React, { Component } from "react";
import { render } from "react-dom";
import { SharedSnackbarProvider } from "./SharedContext";
import ButtonA from "./Components/ButtonA";
import ButtonB from "./Components/ButtonB";

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
