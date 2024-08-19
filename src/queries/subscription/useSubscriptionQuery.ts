import { useQuery } from '../useQuery';

interface SubscriptionResponse {
  message: string;
  user: {
    id: string;
    email: string;
  };
}

interface SubscriptionBody {
  email: string;
}

export function useSubscriptionQuery() {
  return useQuery<SubscriptionResponse, SubscriptionBody>('POST', '/api/subscribe');
}