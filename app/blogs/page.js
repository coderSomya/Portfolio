'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link href="/blogs/new">Write New Post</Link>
        </Button>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map(blog => (
          <motion.div key={blog.id} variants={item}>
            <Link href={`/blogs/${blog.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                {blog.image_url && (
                  <div className="w-full h-48 relative">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>
                    {blog.description.length > 150
                      ? `${blog.description.substring(0, 150)}...`
                      : blog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}