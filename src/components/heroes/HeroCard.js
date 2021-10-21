import React from "react";
import { Link } from "react-router-dom";



export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  img
}) => {
  return (
    <div className="card ms-3" style={{ width: 300, backgroundColor: '#393c40', borderRadius: 6 }}>
      <div className="row no-gutters">
        <div className="cold-md-4 ">
          <img
            src={ img }
            style={{ height: 300, width: '100%', borderRadius: 6 }}
            className="carg-img"
            alt={alter_ego}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text"> {alter_ego} </p>
            {   
                (alter_ego  !== characters)
                        && <p className="card-text">{characters}</p>
            }
            <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./heroe/${id}`} style={{ textDecorationLine: 'none', color: 'maroon' }}>
                    Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
