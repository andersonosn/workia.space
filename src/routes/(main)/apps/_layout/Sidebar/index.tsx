import React, { memo } from 'react';

import { NavPanelPortal } from '@/features/NavPanel';
import SideBarHeaderLayout from '@/features/NavPanel/SideBarHeaderLayout';
import SideBarLayout from '@/features/NavPanel/SideBarLayout';
import AgentSwitchHeader from '@/routes/(main)/agent/_layout/Sidebar/Header/Agent';
import Body from '@/routes/(main)/agent/_layout/Sidebar/Body';

import Nav from './Nav';

const Header = memo(() => (
  <>
    <SideBarHeaderLayout left={<AgentSwitchHeader />} />
    <Nav />
  </>
));

const AppsSidebar = memo(() => {
  return (
    <NavPanelPortal navKey="agent">
      <SideBarLayout body={<Body />} header={<Header />} />
    </NavPanelPortal>
  );
});

AppsSidebar.displayName = 'AppsSidebar';

export default AppsSidebar;
