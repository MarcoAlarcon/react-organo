import './Collaborator.css'

const Collaborator = (props) => {
    return(
        <div className='collaborator'>
            <div className='cabecalho'>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Collaborator