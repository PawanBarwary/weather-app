import Form from "./Form";
 
const NewCard = (props) => {

  

  return (
    <div className="flip-card">
      <div className="flip-card-inner card">
        <div className="flip-card-front center">
          +
        </div>
        <div className="flip-card-back center">
          <Form submitForm={ props.submitForm } />
        </div>
      </div>
    </div>
  );
};

export default NewCard;