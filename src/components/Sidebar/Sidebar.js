import React from 'react';

import Profile from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
