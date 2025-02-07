import { db } from '@vercel/postgres';

export async function createBlogsTable() {
  try {
    await db.sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error('Error creating blogs table:', error);
    throw error;
  }
}