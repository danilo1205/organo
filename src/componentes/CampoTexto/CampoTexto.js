import './CampoTexto.css'


const CampoTexto = (props) =>{
    //let valor = ''


    const aoDigitado = (event) =>{
        props.aoAlterado(event.target.value)
        
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto