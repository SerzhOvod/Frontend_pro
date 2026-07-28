import DetailsList from './DetailsList';

function Details() {
  return (
    <section className="col-md-3">
      <div className="card border-secondary">
        <div className="card-header bg-secondary text-white">
          <h3 className="h6 mb-0">Деталі об'єкта</h3>
        </div>
        <div className="card-body">
          <h4 className="h5 card-title border-bottom pb-2 mb-3">
            Luke Skywalker
          </h4>

          <DetailsList />

          <h5 className="h6 card-subtitle text-muted mb-2">Фільмы з участю:</h5>
          <div className="list-group list-group-flush small">
            <a
              href="#"
              className="list-group-item list-group-item-action py-1 px-0 border-0 text-primary"
            >
              A New Hope
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-1 px-0 border-0 text-primary"
            >
              The Empire Strikes Back
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-1 px-0 border-0 text-primary"
            >
              Return of the Jedi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
