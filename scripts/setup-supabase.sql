-- Create tables for ABC Studios website

-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'unread'
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);

-- Career/Job applications table
CREATE TABLE IF NOT EXISTS career_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id TEXT,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  resume_url TEXT,
  cover_letter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Create an index on job_id for faster lookups
CREATE INDEX IF NOT EXISTS career_applications_job_id_idx ON career_applications(job_id);

-- Esports tournament registrations table
CREATE TABLE IF NOT EXISTS esports_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id TEXT NOT NULL,
  event_title TEXT NOT NULL,
  team_name TEXT NOT NULL,
  captain_name TEXT NOT NULL,
  captain_email TEXT NOT NULL,
  captain_phone TEXT,
  participants TEXT[], -- Array of participant names
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on event_id for faster lookups
CREATE INDEX IF NOT EXISTS esports_registrations_event_id_idx ON esports_registrations(event_id);

-- Add some example data for testing

-- Example contact submissions
INSERT INTO contact_submissions (name, email, phone, message)
VALUES 
  ('John Doe', 'john@example.com', '555-123-4567', 'I would like to inquire about your live streaming services for my upcoming event.'),
  ('Jane Smith', 'jane@example.com', '555-987-6543', 'Could you provide a quote for video production for a corporate training series?');

-- Example career applications
INSERT INTO career_applications (job_id, job_title, full_name, email, phone, resume_url, cover_letter)
VALUES 
  ('1', 'Video Production Specialist', 'Mike Johnson', 'mike@example.com', '555-111-2222', 'https://example.com/resume1.pdf', 'I have 5 years of experience in video production and would love to join your team.'),
  ('3', 'Live Streaming Technician', 'Sarah Wilson', 'sarah@example.com', '555-333-4444', 'https://example.com/resume2.pdf', 'With my background in live event production, I believe I would be a great fit for this position.');

-- Example esports registrations
INSERT INTO esports_registrations (event_id, event_title, team_name, captain_name, captain_email, captain_phone, participants, payment_status)
VALUES 
  ('1', 'Call of Duty: Warzone Tournament', 'Apex Predators', 'Alex Chen', 'alex@example.com', '555-555-5555', ARRAY['Alex Chen', 'Brian Lee', 'Chris Wong', 'David Kim'], 'completed'),
  ('2', 'League of Legends Championship', 'Digital Dragons', 'Emma Taylor', 'emma@example.com', '555-666-7777', ARRAY['Emma Taylor', 'Fiona Brown', 'George Miller', 'Hannah Davis'], 'pending');

-- Enable row level security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE esports_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies that allow anyone to insert, but only authenticated users to select
CREATE POLICY "Allow public inserts on contact_submissions" 
  ON contact_submissions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on contact_submissions" 
  ON contact_submissions FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public inserts on career_applications" 
  ON career_applications FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on career_applications" 
  ON career_applications FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public inserts on esports_registrations" 
  ON esports_registrations FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on esports_registrations" 
  ON esports_registrations FOR SELECT 
  USING (auth.role() = 'authenticated'); 