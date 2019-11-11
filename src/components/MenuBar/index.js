import React, { useState, useEffect } from 'react';

import getThemeColor from '../../utils/getThemeColor';

import { Home } from 'styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
// import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Highlight as Light } from 'styled-icons/material/Highlight';

import * as S from './styled';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Ir para home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mundar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        {/* <S.MenuBarItem title="Mudar visualização">
          <Grid />
        </S.MenuBarItem> */}
        {/* <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem> */}
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
