import "./App.css";
import { members } from "./members";
import { Home } from "./Home";
import { Route, Switch } from "react-router";
import { Customer } from "./pages/Customer";
import { Company } from "./pages/Company";
import { Cadastro } from "./components/Cadastro";
import { useState } from "react";

function App() {
  const [newMembers, setNewMembers] = useState([...members]);

  const incluirCadastro = (name, type) => {
    const newId = newMembers.length + 1;
    setNewMembers([
      ...newMembers,
      { id: newId.toString(), name: name, type: type },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer members={newMembers} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={newMembers} />
          </Route>
          <Route exact path="/">
            <Home members={newMembers} />
          </Route>
        </Switch>
        <h1>Cadastro:</h1>
        <Cadastro incluirCadastro={incluirCadastro}></Cadastro>
      </header>
    </div>
  );
}

export default App;
