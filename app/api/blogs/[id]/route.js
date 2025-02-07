// app/api/blogs/[id]/route.js
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

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