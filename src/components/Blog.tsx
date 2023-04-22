import React from 'react';
import { Post } from '../pages';

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{post.title}</span> -{' '}
            <span className="text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
