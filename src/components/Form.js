import '../styles.css'

const Form = (props) => {

  return (
    <div className='container' >
      <form onSubmit={ props.submitForm } className="form">
        <label>Enter a City</label>
        <input type="text"></input>
        <button type="submit">Get weather</button>
      </form>
    </div>
  );
};

export default Form;