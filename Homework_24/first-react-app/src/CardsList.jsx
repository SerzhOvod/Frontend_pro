import Card from './Card';

function CardsList() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 g-3">
      <Card />
      <Card />
      <Card />
      <Card />

      {/* <div className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="card-title h5">C-3PO</h4>
                      <p className="card-text text-muted small">
                        Рік народження: 112BBY
                      </p>
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

              <div className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="card-title h5">R2-D2</h4>
                      <p className="card-text text-muted small">
                        Рік народження: 33BBY
                      </p>
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

              <div className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="card-title h5">Darth Vader</h4>
                      <p className="card-text text-muted small">
                        Рік народження: 41.9BBY
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm mt-3 w-100"
                    >
                      Детальніше
                    </button>
                  </div>
                </div>
              </div> */}
    </div>
  );
}

export default CardsList;
