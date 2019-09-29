import React from 'react';

import links from './content';

import * as S from './styled';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem key={index}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
