function DetailsList() {
  return (
    <ul className="list-unstyled small mb-3">
      <li className="mb-1">
        <strong>Зріст:</strong> 172 см
      </li>
      <li className="mb-1">
        <strong>Вага:</strong> 77 кг
      </li>
      <li className="mb-1">
        <strong>Колір волосся:</strong> blond
      </li>
      <li className="mb-1">
        <strong>Колір шкіри:</strong> fair
      </li>
      <li className="mb-2">
        <strong>Рідна планета:</strong>{' '}
        <a href="#" className="text-decoration-none">
          Tatooine
        </a>
      </li>
    </ul>
  );
}

export default DetailsList;
