import './listaOpciones.css';



export default function ListaOpciones(){

  /*Metodo map --> arregle.map( (equipo, index) => {
    return <option ></option>
  })*/
  

  const options = [
    "Growth Hacker",
    "Especialista en SEO/SEM",
    "Content Manager",
    "Especialista UX/UI Diseño",
    "Especialista en Redes Sociales",
    "Programador FullStack",
  ]

  const listItems = options.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return <div className="equipoLabel">
    <label>Equipo</label>
    <select>  
      {listItems}     
    </select>
  </div>
}