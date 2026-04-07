'use client';

import { Center } from '@lobehub/ui';
import { useMount } from 'ahooks';
import { LoaderCircleIcon } from 'lucide-react';
import { memo } from 'react';

import { useCreateAppBuilderAgent } from '@/hooks/useCreateAppBuilderAgent';

const AppsIndexPage = memo(() => {
  const { createAppBuilderAgent } = useCreateAppBuilderAgent();

  useMount(() => {
    createAppBuilderAgent();
  });

  return (
    <Center height={'100%'} width={'100%'}>
      <LoaderCircleIcon
        size={32}
        style={{ animation: 'spin 1s linear infinite', opacity: 0.4 }}
      />
    </Center>
  );
});

export default AppsIndexPage;
