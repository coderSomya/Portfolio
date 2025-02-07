'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';

export default function BlogPost({ params }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/blogs/${params.id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      {blog.image_url && (
        <div className="w-full h-64 md:h-96 relative mb-8">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {new Date(blog.created_at).toLocaleDateString()}
      </p>

      <div className="prose max-w-none">
        <MDEditor.Markdown source={blog.content} />
      </div>
    </motion.div>
  );
}