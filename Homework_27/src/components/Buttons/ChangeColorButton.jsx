import { useContext } from 'react';
import { ThemeContext, themes } from '../../themeContext';

const ChangeButtonColor = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme.color === 'white' ? themes.dark : themes.light);
  };

  return (
    <button className="change__color-btn" onClick={handleClick}>
      Change theme
    </button>
  );
};

export default ChangeButtonColor;
