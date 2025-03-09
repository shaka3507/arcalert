import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, type, description, created_by, list_data } = req.body;

  try {
    // Insert data into the 'crisis' table
    const { data, error } = await supabase
      .from('crisis')
      .insert([
        {
          title,
          type,
          description,
          created_by, // make sure this maps to a valid UUID
          // Assuming 'created_at' is set up to default to `now()` in the table schema
          list_data, // assuming this is properly formatted JSON already
        },
      ]);

    if (error) {
      throw error;
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Failed to insert data' });
  }
}