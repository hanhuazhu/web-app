import { useContext } from 'react';
import { ThemeContext } from '../../App';

import {
  FaRegMoon,
  FaRegSun
} from 'react-icons/fa';

const Button = (props) => {
  const navTheme = useContext(ThemeContext);

  return (
    <button
    className={props.value}
    onClick={() => navTheme.theme === 'App--light'
    ? navTheme.setTheme('App--dark')
    : navTheme.setTheme('App--light')}>
      { navTheme.theme === 'App--light'
        ? <FaRegSun />
        : <FaRegMoon />
      }
    </button>
  );
}

export default Button;