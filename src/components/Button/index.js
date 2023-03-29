import "./ActionButton.css"

const ActionButton = (props) =>{
    return (<button className="action-button">
       {props.children} 
    </button>)
}

export default ActionButton