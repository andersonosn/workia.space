import { Flexbox } from '@lobehub/ui';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { useInitAgentConfig } from '@/hooks/useInitAgentConfig';
import RegisterHotkeys from '@/routes/(main)/agent/_layout/RegisterHotkeys';
import { styles } from '@/routes/(main)/agent/_layout/style';

import AppIdSync from './AppIdSync';
import Sidebar from './Sidebar';

const AppsLayout: FC = () => {
  useInitAgentConfig();

  return (
    <>
      <Sidebar />
      <Flexbox className={styles.mainContainer} flex={1} height={'100%'}>
        <Outlet />
      </Flexbox>
      <RegisterHotkeys />
      <AppIdSync />
    </>
  );
};

export default AppsLayout;
