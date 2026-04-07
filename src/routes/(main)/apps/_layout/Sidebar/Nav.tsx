'use client';

import { Flexbox } from '@lobehub/ui';
import { BotPromptIcon } from '@lobehub/ui/icons';
import { PlusIcon } from 'lucide-react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import urlJoin from 'url-join';

import NavItem from '@/features/NavPanel/components/NavItem';
import { useCreateAppBuilderAgent } from '@/hooks/useCreateAppBuilderAgent';
import { useQueryRoute } from '@/hooks/useQueryRoute';
import { usePathname } from '@/libs/router/navigation';
import { useChatStore } from '@/store/chat';

const AppsNav = memo(() => {
  const params = useParams<{ appId?: string }>();
  const appId = params.appId;
  const pathname = usePathname();
  const isStartActive = pathname.includes('/start');
  const router = useQueryRoute();
  const switchTopic = useChatStore((s) => s.switchTopic);

  const { createAppBuilderAgent, loading } = useCreateAppBuilderAgent();

  return (
    <Flexbox gap={1} paddingInline={4}>
      <NavItem
        icon={PlusIcon}
        loading={loading}
        title="New App"
        onClick={createAppBuilderAgent}
      />
      {appId && (
        <NavItem
          active={isStartActive}
          icon={BotPromptIcon}
          title="Configure App"
          onClick={() => {
            switchTopic(null, { skipRefreshMessage: true });
            router.push(urlJoin('/apps', appId, 'start'));
          }}
        />
      )}
    </Flexbox>
  );
});

export default AppsNav;
