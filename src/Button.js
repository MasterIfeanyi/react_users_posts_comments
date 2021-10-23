const Button = ({buttonText, request, setRequest}) => {
    return (
        <button
            type="button"
            className={buttonText === request ? "selected" : null }
            onClick={() => setRequest(buttonText)}>
            {buttonText}
        </button>
    )
}

export default Button
