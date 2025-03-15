import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === '' || supabaseAnonKey === '') {
  console.error('Missing Supabase credentials. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env.local file.');
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
  status?: string;
};

export type CareerApplication = {
  id?: string;
  job_id?: string;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  resume_url?: string;
  cover_letter?: string;
  created_at?: string;
  status?: string;
};

export type EsportsRegistration = {
  id?: string;
  event_id: string;
  event_title: string;
  team_name: string;
  captain_name: string;
  captain_email: string;
  captain_phone?: string;
  participants: string[];
  payment_status?: string;
  created_at?: string;
};


// Contact submissions
export async function submitContactForm(data: ContactSubmission) {
  return supabase.from('contact_submissions').insert([data]);
}

// Career applications
export async function submitCareerApplication(data: CareerApplication) {
  return supabase.from('career_applications').insert([data]);
}

// Esports registrations
export async function submitEsportsRegistration(data: EsportsRegistration) {
  return supabase.from('esports_registrations').insert([data]);
}

export async function fetchContactSubmissions() {
  return supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
}

export async function fetchCareerApplications() {
  return supabase
    .from('career_applications')
    .select('*')
    .order('created_at', { ascending: false });
}

export async function fetchEsportsRegistrations() {
  return supabase
    .from('esports_registrations')
    .select('*')
    .order('created_at', { ascending: false });
} 