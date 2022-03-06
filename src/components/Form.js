const Form = (props) => {
    return (
        <form onSubmit={props.submitForm}>
            <label>Enter a City</label>
            <input type="text"></input>
            <button type="submit">Get weather</button>
        </form>
    );
}

export default Form;