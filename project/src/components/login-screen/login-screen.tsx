import Logo from '../logo/logo';
import { useRef, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, Cities } from '../../const';
import { selectCity } from '../../store/action';
import { Link, useHistory } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';

function LoginScreen(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSelectCity = (selectedCity: string) => {
    dispatch(selectCity(selectedCity));
  };

  const randomCity = Cities[Math.floor(Math.random() * Cities.length)];

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      history.push(AppRoute.Main);
    }
  }, []);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[A-Za-z]).*"
                  title="Пароль должен содержать минимум одну букву и цифру"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                onClick={() => {
                  handleSelectCity(randomCity);
                }}
                className="locations__item-link"
                to={AppRoute.Main}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
