import { Link } from "react-router-dom";

export const CharacterCard = ({ name, birth_year }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <Link to={`/character/${name}`}>
        <div className="card">
          <img
            src="https://c.tenor.com/smURMKllRl8AAAAd/star-wars.gif"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
