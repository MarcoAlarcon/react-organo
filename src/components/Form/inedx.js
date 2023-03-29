import { useState } from 'react'
import ActionButton from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setNome] = useState('')
    const [position, setCargo] = useState('')
    const [image, setImagem] = useState('')
    const [team, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onRegistered({
            name,
            position,
            image,
            team
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formField'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField 
                    label="Nome" 
                    hintText="Digite seu nome" 
                    valor={name} 
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    label="Cargo" 
                    hintText="Digite seu cargo" 
                    valor = {position}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    hintText="Digite o endereço da imagem" 
                    valor={image}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropDownList 
                    label="Time"
                    itens={props.teams}
                    valor={team}
                    aoAlterado={valor => setTime(valor)}
                />
                <ActionButton>
                    Criar Card
                </ActionButton>
            </form>
        </section>
    )
}

export default Form