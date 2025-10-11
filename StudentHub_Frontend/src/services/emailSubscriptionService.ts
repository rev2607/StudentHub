import { supabase } from '../lib/supabaseClient';

export interface EmailSubscriptionData {
  email: string;
  source?: string;
  ip_address?: string;
  user_agent?: string;
}

export interface EmailSubscriptionResponse {
  success: boolean;
  message: string;
  id?: string;
  alreadyExists?: boolean;
}

/**
 * Submits email subscription to Supabase
 * @param data - The email subscription data
 * @returns Promise with submission response
 */
export async function subscribeEmail(data: EmailSubscriptionData): Promise<EmailSubscriptionResponse> {
  try {
    // Prepare data for Supabase insertion
    const supabaseData = {
      email: data.email.toLowerCase().trim(),
      source: data.source || 'footer_form',
      ip_address: data.ip_address || null,
      user_agent: data.user_agent || null,
      status: 'active'
    };

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('email_subscriptions')
      .insert([supabaseData])
      .select('id')
      .single();

    if (error) {
      // Check if it's a unique constraint violation (email already exists)
      if (error.code === '23505') {
        return {
          success: true,
          message: 'Email already subscribed! Thank you for your interest.',
          alreadyExists: true
        };
      }
      
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    if (result) {
      return {
        success: true,
        message: 'Thank you for subscribing! We will keep you updated with the latest news.',
        id: result.id
      };
    } else {
      throw new Error('No data returned from database');
    }
  } catch (error) {
    console.error('Error subscribing email:', error);
    
    return {
      success: false,
      message: 'Sorry, there was an error subscribing your email. Please try again later.',
    };
  }
}

/**
 * Retrieves all email subscriptions from Supabase
 * @returns Promise with array of email subscriptions
 */
export async function getEmailSubscriptions(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('email_subscriptions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching email subscriptions:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error retrieving email subscriptions from Supabase:', error);
    return [];
  }
}

/**
 * Updates the status of an email subscription in Supabase
 * @param id - The ID of the email subscription
 * @param status - The new status
 * @returns Promise with update result
 */
export async function updateEmailSubscriptionStatus(id: string, status: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('email_subscriptions')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating email subscription status:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating email subscription status:', error);
    return false;
  }
}

/**
 * Unsubscribes an email from the subscription list
 * @param email - The email to unsubscribe
 * @returns Promise with unsubscription result
 */
export async function unsubscribeEmail(email: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('email_subscriptions')
      .update({ status: 'unsubscribed' })
      .eq('email', email.toLowerCase().trim());

    if (error) {
      console.error('Error unsubscribing email:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error unsubscribing email:', error);
    return false;
  }
}
