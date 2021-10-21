import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";


// import batman from '../../assets/heroes/dc-batman.jpg';  estático

const heroeImages = require.context( '../../assets/heroes', true );

export const HeroeScreen = ({ history }) => {

  const { heroeId } = useParams();

  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId])

  if (!heroe) {
    return <Redirect to="/" />;
  }


  const handleReturn = () => {

    if( history.length <= 2 ){
      history.push('/')
    }else{
      history.goBack()
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={`/assets/heroes/${heroe.id}.jpg`}  desde assets
          // src={batman} impoort
          src={heroeImages(`./${heroeId}.jpg`).default}
          alt={heroe.alter_ego}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-items"><b> Alter ego: </b>{ heroe.alter_ego }</li>
            <li className="list-group-items"><b> Publisher: </b>{ heroe.publisher }</li>
            <li className="list-group-items"><b> First appearance: </b>{ heroe.first_appearance }</li>
        </ul>

        <h5>Characters</h5>
        <p>{heroe.characters}</p>

        <button className="btn btn-danger" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
