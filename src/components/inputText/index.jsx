import './inputText.css'

const InputText = (label) => {
  const placemoficado = `${label.placeholder}...`;
  console.log(label.titulo + " hola");
  return <div className='campo-texto'>
    <label>{label.titulo}</label>
    <input type="text" placeholder={placemoficado}/>
  </div>
}

export default InputText;