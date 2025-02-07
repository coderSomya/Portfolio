// app/api/blogs/[id]/route.js
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', params.id)
        .single();
  
      if (error) throw error;
      if (!data) {
        return NextResponse.json(
          { error: 'Blog not found' }, 
          { status: 404 }
        );
      }
  
      return NextResponse.json(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
      return NextResponse.json(
        { error: error.message }, 
        { status: 500 }
      );
    }
}

export async function DELETE(request, { params }) {
  try {
    const { adminKey } = await request.json();
    
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', params.id);

    if (error) throw error;

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}