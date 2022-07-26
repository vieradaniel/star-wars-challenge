import { Link } from "react-router-dom";

export const CharacterCard = ({ name, birth_year }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <Link to={`/character/${name}`}>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Click on this card to get the detailed information of this character
            </p>
          </div>
        </div>
      </Link>
    </div>

    //  <div className="card">
    //    <div className="card-header">{name}</div>
    //    <div className="card-body">
    //      <h5 className="card-title">{name}</h5>
    //      <p className="card-text">
    //       birth year : {birth_year}
    //      </p>
    //      <Link to ={`/character/${name}`}>
    //        More
    //      </Link>
    //    </div>
    //  </div>
  );
};
