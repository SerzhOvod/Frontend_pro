function Pagination() {
  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <button className="page-link" type="button">
            &lt; Попередня
          </button>
        </li>
        <li className="page-item active">
          <span className="page-link">Сторінка 1</span>
        </li>
        <li className="page-item">
          <button className="page-link" type="button">
            Наступна &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
