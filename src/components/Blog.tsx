import React from "react";
import Link from "next/link";
import { Post } from "../pages";
import { slugify } from "../utils/slugify";

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
            <Link
              className="font-semibold"
              href={`/blog/${slugify(post.title)}`}
            >
              {post.title}
            </Link>{" "}
            - <span className="text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
