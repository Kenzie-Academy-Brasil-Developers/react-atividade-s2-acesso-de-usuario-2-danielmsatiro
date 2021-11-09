import { useState } from "react";

export const Cadastro = ({ incluirCadastro }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const inclui = () => {
    if (type !== "") return incluirCadastro(name, type);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="radio"
        id="pj"
        name="type"
        value={type}
        onClick={(e) => setType(e.target.id)}
      />
      <label id="pj">pj</label>
      <input
        type="radio"
        id="pf"
        name="type"
        value={type}
        onClick={(e) => setType(e.target.id)}
      />
      <label id="pf">pf</label>
      <br />
      <button onClick={() => inclui()}>Incluir</button>
    </div>
  );
};
