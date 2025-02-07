// app/api/blogs/route.js
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { title, description, content, imageUrl, adminKey } = await request.json();
    
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('blogs')
      .insert([
        {
          title,
          description,
          content,
          image_url: imageUrl,
        }
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}