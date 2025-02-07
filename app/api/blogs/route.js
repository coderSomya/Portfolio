import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const ADMIN_KEY = process.env.ADMIN_KEY || 'admin';

export async function GET() {
  try {
    const { rows } = await db.sql`SELECT * FROM blogs ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, description, content, imageUrl, adminKey } = await request.json();
    
    if (adminKey !== ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { rows } = await db.sql`
      INSERT INTO blogs (title, description, content, image_url)
      VALUES (${title}, ${description}, ${content}, ${imageUrl})
      RETURNING *
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
