"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize your Supabase client
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(url, anonKey);

const useFetchCrisisItems = (event) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let { data, error } = await supabase
          .from('crisis_items')
          .select('*')
          .eq('event', event);

        if (error) throw error;
        console.log(data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [event]);

  return { items, loading, error };
};

export default useFetchCrisisItems;