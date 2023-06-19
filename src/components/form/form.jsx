import './form.css'
import InputText from '../inputText'

const Form = () => {
  return <section className="formulario"> <form >
    <h2>Crea tu colaborador</h2>
    <InputText titulo="Cual es el nombre de tu Colaborador?" placeholder="Nombre Colaborador"/>
    <InputText titulo="Area a ubicar" placeholder="Desarrollo..."/>
    <InputText titulo="Area a ubicar" placeholder="Escribe el neo"/>

  </form>
  </section>
}

export default Form;