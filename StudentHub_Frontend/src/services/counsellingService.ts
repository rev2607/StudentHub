import { CounsellingFormData } from '../components/CounsellingSignupForm';
import { supabase } from '../lib/supabaseClient';

export interface CounsellingSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}

/**
 * Submits counselling signup data to Supabase
 * @param data - The counselling form data
 * @returns Promise with submission response
 */
export async function submitCounsellingRequest(data: CounsellingFormData): Promise<CounsellingSubmissionResponse> {
  try {
    // Prepare data for Supabase insertion
    const supabaseData = {
      email: data.email,
      parent_name: data.parentName,
      student_name: data.studentName,
      phone_number: data.phoneNumber,
      exam_target: data.examTarget,
      location: data.location,
      status: 'pending'
    };

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('counselling_requests')
      .insert([supabaseData])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    if (result) {
      return {
        success: true,
        message: 'Thank you for your interest! We will contact you soon for counselling.',
        id: result.id
      };
    } else {
      throw new Error('No data returned from database');
    }
  } catch (error) {
    console.error('Error submitting counselling request:', error);
    
    return {
      success: false,
      message: 'Sorry, there was an error submitting your request. Please try again later.',
    };
  }
}

/**
 * Stores counselling data locally (for demo purposes)
 * In production, this should be handled by your backend
 */
export function storeCounsellingDataLocally(data: CounsellingFormData): void {
  try {
    const existingData = localStorage.getItem('counselling_requests');
    const requests = existingData ? JSON.parse(existingData) : [];
    
    const newRequest = {
      ...data,
      id: `counselling_${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    requests.push(newRequest);
    localStorage.setItem('counselling_requests', JSON.stringify(requests));
    
    console.log('Counselling request stored locally:', newRequest);
  } catch (error) {
    console.error('Error storing counselling data locally:', error);
  }
}

/**
 * Retrieves all counselling requests from Supabase
 * @returns Promise with array of counselling requests
 */
export async function getCounsellingRequestsFromSupabase(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('counselling_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching counselling requests:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error retrieving counselling requests from Supabase:', error);
    return [];
  }
}

/**
 * Retrieves all counselling requests from local storage
 * This is for demo purposes - in production, use your backend API
 */
export function getCounsellingRequests(): any[] {
  try {
    const data = localStorage.getItem('counselling_requests');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving counselling requests:', error);
    return [];
  }
}

/**
 * Updates the status of a counselling request in Supabase
 * @param id - The ID of the counselling request
 * @param status - The new status
 * @returns Promise with update result
 */
export async function updateCounsellingRequestStatus(id: string, status: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('counselling_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating counselling request status:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating counselling request status:', error);
    return false;
  }
}
