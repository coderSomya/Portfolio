'use client';

import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showKeyDialog, setShowKeyDialog] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          content,
          imageUrl,
          adminKey,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create blog post');
      }

      router.push('/blogs');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8">Write New Blog Post</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter blog description"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <div data-color-mode="light">
            <MDEditor
              value={content}
              onChange={setContent}
              preview="edit"
              height={400}
            />
          </div>
        </div>

        <Button
          onClick={() => setShowKeyDialog(true)}
          className="w-full"
        >
          Publish Post
        </Button>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      <Dialog open={showKeyDialog} onOpenChange={setShowKeyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Admin Key</DialogTitle>
            <DialogDescription>
              Please enter your admin key to publish this post.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter admin key"
            />
            <Button onClick={handleSubmit} className="w-full">
              Confirm & Publish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
