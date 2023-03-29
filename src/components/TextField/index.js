
import './TextField.css'

const TextField = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} placeholder={props.hintText}/>
        </div>
    )
}

export default TextField