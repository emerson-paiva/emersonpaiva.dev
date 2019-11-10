import React from 'react';

import Profile from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';
import MenuLinks from '../MenuLinks/MenuLinks';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    {/* <MenuLinks /> */}
    <SocialLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
