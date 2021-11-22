import PropTypes from "prop-types"

const Button = ({color, text, onClick}) => {
    return(
        
    <button 
        onClick= {onClick} 
        style = {{ backgroundColor: color, color: "white", padding:"10px", borderRadius:"8px"}} 
        className ="btn">{text}
    </button>
    )
};

Button.defaultProps = {color: "steelblue"}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button