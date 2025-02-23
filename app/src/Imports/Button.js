const Button = ({text, onclick, variant = "primary", disabled = false}) => {
    return (
        <button
        className = {'btn ${variant}'}
        onClick = {onclick}
        disabled = {disabled}
        >
            {text}
        </button>
    );
};

export default Button