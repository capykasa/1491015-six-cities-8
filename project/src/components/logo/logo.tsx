import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  width?: string;
  height?: string;
}

function Logo({ width = '81', height = '41' }: LogoProps): JSX.Element {
  return (
    <Link className="header__logo-link" to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

export default Logo;
