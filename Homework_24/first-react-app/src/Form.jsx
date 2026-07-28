function Form() {
  return (
    <form className="d-flex gap-2" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        className="form-control"
        placeholder="Шукати..."
        name="search"
      />
      <button type="button" className="btn btn-primary">
        Пошук
      </button>
    </form>
  );
}

export default Form;
