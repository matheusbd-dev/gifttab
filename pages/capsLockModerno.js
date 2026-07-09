function CapsLockModerno(props) {
  const textoInserido = props.children;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}

export default CapsLockModerno;
