import React, { useState } from 'react';
import { useSubscriptionQuery } from '../queries/subscription/useSubscriptionQuery';

export const SubscribeView: React.FC = () => {
  const [email, setEmail] = useState('');
  const { execute, loading, error } = useSubscriptionQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await execute({ email });
      alert(result.message);
      setEmail('');
    } catch (err) {
      console.error('Subscription failed:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Receive new posts on your inbox</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};