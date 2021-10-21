import React, { useMemo } from "react";
import { parse } from 'query-string'
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import { getHeroesParams } from "../../selectors/getHeroesParams";

export const SearchScreen = ({ history }) => {


  const urlParams = useLocation().search;
  const { q = '' } = parse(urlParams);

  const [valorForm, handleInputChange] = useForm({
    search: q,
  });
  const { search } = valorForm;

  const busquedas = useMemo(() => getHeroesParams(q), [q])


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push( `?q=${search}` );
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              placeholder="Find your hero"
              className="form-control"
              name="search"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary mt-3 w-100"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {busquedas.length > 0
            ? busquedas.map((x) => <p className="card-heroe-one" key={x.id}>{x.superhero}</p>)
            : <div className="error-no-data">No hay data</div>}
        </div>
      </div>
    </div>
  );
};
