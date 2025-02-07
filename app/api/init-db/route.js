// app/api/init-db/route.js
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create the blogs table if it doesn't exist
    const { error } = await supabase.rpc('create_blogs_table', {});
    
    if (error) {
      // If RPC doesn't exist, create table directly using SQL
      const { error: sqlError } = await supabase.sql`
        CREATE TABLE IF NOT EXISTS blogs (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          content TEXT NOT NULL,
          image_url TEXT,
          created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      if (sqlError) throw sqlError;
    }

    return NextResponse.json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}