'use client';

import { Center, Spin } from '@lobehub/ui';
import { useMount } from 'ahooks';
import { memo } from 'react';

import { useCreateAppBuilderAgent } from '@/hooks/useCreateAppBuilderAgent';

const AppsIndexPage = memo(() => {
  const { createAppBuilderAgent } = useCreateAppBuilderAgent();

  useMount(() => {
    createAppBuilderAgent();
  });

  return (
    <Center height={'100%'} width={'100%'}>
      <Spin />
    </Center>
  );
});

export default AppsIndexPage;
