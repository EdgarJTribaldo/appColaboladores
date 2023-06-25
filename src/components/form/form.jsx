import './form.css'
import InputText from '../inputText'
import ListaOpciones from '../listaOpciones';
import Boton from '../boton'

// React.Render(React.createElement('div', {},   'Hola, Mundo con jsx'), document.body);



const Form = () => {

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio" + InputText.titulo);
  }

  return <section className="formulario"> <form onSubmit={manejarEnvio}>
    <h2>Crea tu colaborador</h2>
    <InputText titulo="Cual es el nombre de tu Colaborador?" placeholder="Nombre Colaborador" required/>
    <InputText titulo="Area a ubicar" placeholder="Desarrollo" required/>
    <InputText titulo="Contenido" placeholder="Escribe el neo" required/>
    <ListaOpciones/>
    <Boton>Crear Colaborador</Boton>
  </form>
  </section>
}

export default Form;