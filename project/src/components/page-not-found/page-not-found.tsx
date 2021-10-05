import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <h1>
          404.
          <br />
          <small>Page not found</small>
          <h6><Link to="/">{'>'} Go to main page {'<'}</Link></h6>
        </h1>
      </main>
    </div>
  );
}

export default PageNotFound;
