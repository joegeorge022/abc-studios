"use client";

import { useState, useEffect } from 'react';
import { 
  supabase, 
  type ContactSubmission, 
  type CareerApplication, 
  type EsportsRegistration, 
  fetchContactSubmissions,
  fetchCareerApplications,
  fetchEsportsRegistrations
} from '../../utils/supabase';

export default function AdminDashboard() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
  const [esportsRegistrations, setEsportsRegistrations] = useState<EsportsRegistration[]>([]);
  const [activeTab, setActiveTab] = useState<'contacts' | 'careers' | 'esports'>('contacts');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data: contactData, error: contactError } = await fetchContactSubmissions();
        
        if (contactError) throw new Error(contactError.message);
        setContactSubmissions(contactData || []);
        
        const { data: careerData, error: careerError } = await fetchCareerApplications();
        
        if (careerError) throw new Error(careerError.message);
        setCareerApplications(careerData || []);
        
        const { data: esportsData, error: esportsError } = await fetchEsportsRegistrations();
        
        if (esportsError) throw new Error(esportsError.message);
        setEsportsRegistrations(esportsData || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Admin Dashboard</h1>
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6">
            <p>{error}</p>
          </div>
        )}
        
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => setActiveTab('contacts')}
              className={`py-3 px-4 font-medium ${activeTab === 'contacts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}>
              Contact Submissions ({contactSubmissions.length})
            </button>
            <button 
              onClick={() => setActiveTab('careers')}
              className={`py-3 px-4 font-medium ${activeTab === 'careers' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}>
              Career Applications ({careerApplications.length})
            </button>
            <button 
              onClick={() => setActiveTab('esports')}
              className={`py-3 px-4 font-medium ${activeTab === 'esports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}>
              Esports Registrations ({esportsRegistrations.length})
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                {contactSubmissions.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400">No contact submissions yet.</p>
                  </div>
                ) : (
                  contactSubmissions.map((submission) => (
                    <div key={submission.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{submission.name}</h3>
                        <p className="text-sm text-gray-500">{submission.created_at && formatDate(submission.created_at)}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</p>
                          <p>{submission.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Phone</p>
                          <p>{submission.phone || 'Not provided'}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Message</p>
                        <p className="whitespace-pre-wrap">{submission.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            
            {activeTab === 'careers' && (
              <div className="space-y-6">
                {careerApplications.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400">No career applications yet.</p>
                  </div>
                ) : (
                  careerApplications.map((application) => (
                    <div key={application.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{application.full_name}</h3>
                        <p className="text-sm text-gray-500">{application.created_at && formatDate(application.created_at)}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Applied For</p>
                          <p>{application.job_title}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</p>
                          <p>{application.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Phone</p>
                          <p>{application.phone}</p>
                        </div>
                        {application.resume_url && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Resume</p>
                            <a href={application.resume_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a>
                          </div>
                        )}
                      </div>
                      {application.cover_letter && (
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Cover Letter</p>
                          <p className="whitespace-pre-wrap">{application.cover_letter}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
            
            {activeTab === 'esports' && (
              <div className="space-y-6">
                {esportsRegistrations.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400">No esports registrations yet.</p>
                  </div>
                ) : (
                  esportsRegistrations.map((registration) => (
                    <div key={registration.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{registration.team_name}</h3>
                        <p className="text-sm text-gray-500">{registration.created_at && formatDate(registration.created_at)}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Event</p>
                          <p>{registration.event_title}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Captain</p>
                          <p>{registration.captain_name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</p>
                          <p>{registration.captain_email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Phone</p>
                          <p>{registration.captain_phone || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Payment Status</p>
                          <p className={registration.payment_status === 'completed' ? 'text-green-600' : 'text-yellow-600'}>
                            {registration.payment_status === 'completed' ? 'Paid' : 'Pending'}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Team Members</p>
                        <ul className="list-disc pl-5 mt-2">
                          {registration.participants.map((participant, index) => (
                            <li key={index}>{participant}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
} 