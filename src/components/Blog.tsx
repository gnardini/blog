import React from "react";
import Link from "next/link";
import { Post } from "../pages";
import { slugify } from "../utils/slugify";

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1 bg-primary-accent shrink-0" />
      <div className="flex-grow ml-8 my-8">
        <h2 className="text-4xl font-bold mb-8">BLOG POSTS</h2>
        <ul className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <li key={index}>
              <Link
                className="text-2xl font-normal hover:underline"
                href={`/blog/${slugify(post.title)}`}
              >
                {post.title}
              </Link>
              <span className="text-text-secondary ml-4">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;