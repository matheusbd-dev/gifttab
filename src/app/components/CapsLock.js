import { Children } from "react";

function CapsLock(props) {
  const textoInserido = props.children;
  const textoCapsLock = textoInserido.toUpperCase();
  return (
    <h1 className="text-[#282c34] mb-4 text-4xl lg:text-4xl font-extrabold">
      {textoCapsLock}
    </h1>
  );
}

export default CapsLock;
