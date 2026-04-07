import { memo } from 'react';

import AgentOnboardingPage from '@/features/Onboarding/Agent';

const AgentOnboardingRoute = memo(() => {
  return <AgentOnboardingPage />;
});

AgentOnboardingRoute.displayName = 'AgentOnboardingRoute';

export default AgentOnboardingRoute;
