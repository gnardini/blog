import axios from 'axios';
import React from 'react';
import Blog from '../components/Blog';

export interface Post {
  title: string;
  date: string;
  content: string;
}

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-12 px-4 h-full">
      <Blog posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    'https://raw.githubusercontent.com/gnardini/blog-content/main/posts.json'
  );
  const posts: Post[] = response.data;

  return {
    props: {
      posts,
    },
  };
}

export default Home;

