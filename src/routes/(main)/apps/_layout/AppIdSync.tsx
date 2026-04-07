import { useMount, usePrevious, useUnmount } from 'ahooks';
import { useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { createStoreUpdater } from 'zustand-utils';

import { useAgentStore } from '@/store/agent';
import { useChatStore } from '@/store/chat';

const AppIdSync = () => {
  const useStoreUpdater = createStoreUpdater(useAgentStore);
  const useChatStoreUpdater = createStoreUpdater(useChatStore);
  const params = useParams<{ appId?: string }>();
  const [searchParams] = useSearchParams();
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;
  const prevAgentId = usePrevious(params.appId);

  useStoreUpdater('activeAgentId', params.appId);
  useChatStoreUpdater('activeAgentId', params.appId ?? '');

  useEffect(() => {
    if (prevAgentId !== undefined && prevAgentId !== params.appId) {
      useChatStore.getState().clearPortalStack();

      const topicFromUrl = searchParamsRef.current.get('topic');
      if (!topicFromUrl) {
        useChatStore.getState().switchTopic(null, { skipRefreshMessage: true });
      }
    }
    if (params.appId) {
      useChatStore.getState().clearUnreadCompletedAgent(params.appId);
    }
  }, [params.appId, prevAgentId]);

  useMount(() => {
    useChatStore.setState({ activeAgentId: params.appId }, false, 'AppIdSync/mountAppId');
  });

  useUnmount(() => {
    useAgentStore.setState({ activeAgentId: undefined }, false, 'AppIdSync/unmountAppId');
    useChatStore.setState(
      { activeAgentId: undefined, activeTopicId: undefined },
      false,
      'AppIdSync/unmountAppId',
    );
  });

  return null;
};

export default AppIdSync;
