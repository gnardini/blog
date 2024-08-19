import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { Post } from "..";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { slugify } from "../../utils/slugify";
import Head from "next/head";
import rehypeRaw from "rehype-raw";
import { primaryAccent } from "../../utils/colors";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto mt-12 px-4">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title} by Gonza Nardini`} />
      </Head>
      <p className="ml-4 mb-1 text-gray-500">{post.date}</p>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-primary-accent mr-3" style={{ backgroundColor: primaryAccent }}></div>
              <h1 {...props} className="font-semibold text-3xl" />
            </div>
          ),
          h2: ({ node, ...props }) => (
            <h2 {...props} className="font-semibold text-2xl" />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="mt-4 mb-4 text-lg" />
          ),
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/gnardini/blog-content/main/posts.json"
  );
  const posts: Post[] = response.data;

  const paths = posts.map((post) => ({
    params: { slug: slugify(post.title) },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };

  const response = await axios.get(
    "https://raw.githubusercontent.com/gnardini/blog-content/main/posts.json"
  );
  const posts: Post[] = response.data;

  const post = posts.find((post) => slugify(post.title) === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const contentResponse = await axios.get(
    `https://raw.githubusercontent.com/gnardini/blog-content/main/${post.content}`
  );
  post.content = contentResponse.data;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export default BlogPost;
