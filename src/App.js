import { useState } from "react";
import "./App.css";
import MainComponants from "./MainComponants/MainComponants";
import SecondContainer from "./SecondContainer/SecondContainer";

function App() {
  const [selectedRate, setSelectedRate] = useState(0);
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="App">
      {!isShown && (
        <MainComponants
          rate={setSelectedRate}
          selectedKey={selectedRate}
          submited={setIsShown}
        />
      )}

      {isShown && <SecondContainer result={selectedRate} />}
    </div>
  );
}

export default App;
