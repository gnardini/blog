import React, { useState } from 'react';
import { useSubscriptionQuery } from '../queries/subscription/useSubscriptionQuery';
import { primaryAccent } from '../utils/colors';

interface SubscribeViewProps {
  className?: string;
}

export const SubscribeView: React.FC<SubscribeViewProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const { execute, loading, error } = useSubscriptionQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await execute({ email });
      setSubscriptionSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription failed:', err);
    }
  };

  return (
    <div className={`flex flex-row max-w-md mx-auto mt-8 ${className}`}>
      <div className="w-1 bg-primary-accent shrink-0" />
      <div className="flex-grow ml-4">
        <h2 className="text-2xl font-bold mb-4">Receive new posts on your inbox</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="mt-1 p-1 text-black outline-primary-accent block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {subscriptionSuccess ? (
            <p className="w-full py-1 px-4 text-xl font-medium text-center" style={{ color: primaryAccent }}>
              Subscription successful!
            </p>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-1 px-4 text-xl border border-transparent rounded-md shadow-sm font-medium text-black bg-primary-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent`}
              style={{ backgroundColor: primaryAccent }}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          )}
        </form>
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  );
};