import React from "react";
function SearchBar(props) {
  const enterKeyHandler = (e) => {
    if (e.key == "Enter") {
      document.getElementById("SearchBar").click();
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();

    props.setCity(props.input);

    props.setFeelsLike(props.data.data.main.feels_like);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="SearchBar"
            className="form-control"
            placeholder="Enter City"
            onChange={(event) => {
              props.setInput(event.target.value);
            }}
            onKeyPress={(event) => enterKeyHandler(event)}
          />
          <small id="emailHelp" className="form-text text-muted">
            See weather update of every nook and corner of the world
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            searchHandler(event);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
