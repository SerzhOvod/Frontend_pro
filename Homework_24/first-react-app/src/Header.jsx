import Form from './Form';

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
      <h1 className="h3 mb-0">SWAPI Інтерфейс</h1>
      <Form />
    </header>
  );
}

export default Header;
