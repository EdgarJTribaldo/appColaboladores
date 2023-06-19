import './inputText.css'

const InputText = (label) => {
  console.log(label.titulo + " hola");
  return <div className='campo-texto'>
    <label>{label.titulo}</label>
    <input type="text" placeholder={label.placeholder}/>
  </div>
}

export default InputText;