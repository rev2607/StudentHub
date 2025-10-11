import { useState, useEffect } from 'react';
import { getEmailSubscriptions, updateEmailSubscriptionStatus } from '../services/emailSubscriptionService';

interface EmailSubscription {
  id: string;
  email: string;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
}

const EmailSubscriptionsView: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<EmailSubscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        const supabaseSubscriptions = await getEmailSubscriptions();
        setSubscriptions(supabaseSubscriptions);
      } catch (error) {
        console.error('Error fetching email subscriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const success = await updateEmailSubscriptionStatus(id, newStatus);
      if (success) {
        setSubscriptions(prev => 
          prev.map(sub => 
            sub.id === id ? { ...sub, status: newStatus } : sub
          )
        );
      }
    } catch (error) {
      console.error('Error updating subscription status:', error);
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Email Subscriptions</h2>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Email Subscriptions</h2>
        <p className="text-gray-600">No email subscriptions found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Email Subscriptions ({subscriptions.length})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Subscribed</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {subscriptions.map((subscription) => (
              <tr key={subscription.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">{subscription.email}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{subscription.source}</td>
                <td className="px-4 py-2 text-sm">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    subscription.status === 'active' ? 'bg-green-100 text-green-800' :
                    subscription.status === 'unsubscribed' ? 'bg-red-100 text-red-800' :
                    subscription.status === 'bounced' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {subscription.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{formatDate(subscription.created_at)}</td>
                <td className="px-4 py-2 text-sm">
                  <select
                    value={subscription.status}
                    onChange={(e) => handleStatusChange(subscription.id, e.target.value)}
                    className="text-xs border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="active">Active</option>
                    <option value="unsubscribed">Unsubscribed</option>
                    <option value="bounced">Bounced</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailSubscriptionsView;
