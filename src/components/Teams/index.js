import Collaborator from '../Collaborator'
import './Teams.css'

const Team = (props) => {
    return(
        <section className='team-section' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator
                    key={collaborator.name}
                    name={collaborator.name}
                    position={collaborator.position}
                    image={collaborator.image}
                />)}
            </div>
        </section>
    )
}

export default Team