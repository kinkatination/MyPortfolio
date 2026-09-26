import "./App.css";
//import styled from "styled-components";
import { Header } from "./layout/header/Header.styled";
import { Main } from "./componets/main/Main.styled";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
