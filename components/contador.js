import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(1);

  function addCount() {
    setContador(contador + 1);
  }

  function removeCount() {
    setContador(contador - 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={addCount}>ADICIONAR</button>
      <button onClick={removeCount}>REMOVER</button>
    </div>
  );
}

export default Contador;
