import './App.css';
import Header from './Header';
import Aside from './Aside';
import CardsList from './CardsList';
import Pagination from './Pagination';
import Details from './Details';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="container my-4">
        <Header />

        <div className="row g-4">
          <Aside />

          <main className="col-md-6 col-lg-7">
            <h2 className="h4 mb-3">Результати (People)</h2>

            <CardsList />
            <Pagination />
          </main>

          <Details />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
