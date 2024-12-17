import React from "react";
import "./App.css";
import { InputField } from "./components/InputField";

// function App() {
//   return <div>Hello world</div>;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField />
    </div>
  );
};

export default App;
