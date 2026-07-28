function Card() {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h4 className="card-title h5">Luke Skywalker</h4>
            <p className="card-text text-muted small">Рік народження: 19BBY</p>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm mt-3 w-100"
          >
            Детальніше
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
