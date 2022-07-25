import { Link } from "react-router-dom";

export const CharacterCard = ({ name ,birth_year}) => {

  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          birth year : {birth_year}
        </p>
        <Link to ={`/character/${name}`}>
          More
        </Link>
      </div>
    </div>
   
  );

};
