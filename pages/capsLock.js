<CapsLock texto="Me deixe em CapsLock por favor" />;

function CapsLock(props) {
  const textoInserido = props.texto;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}

export default CapsLock;
