import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_BUILDER_META, APP_BUILDER_SYSTEM_PROMPT } from '@/config/appBuilderPrompt';
import { agentService } from '@/services/agent';

export const useCreateAppBuilderAgent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createAppBuilderAgent = useCallback(async () => {
    setLoading(true);
    try {
      const { agentId } = await agentService.createAgent({
        config: {
          avatar: APP_BUILDER_META.avatar,
          plugins: ['lobe-cloud-sandbox'],
          systemRole: APP_BUILDER_SYSTEM_PROMPT,
          title: APP_BUILDER_META.name,
        },
      });

      if (agentId) {
        navigate(`/apps/${agentId}`);
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return { createAppBuilderAgent, loading };
};
