import React from 'react';
import Landing from '../components/Landing';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div className="container mx-auto mt-12 px-4">
      <Landing />
      <Blog />
    </div>
  );
}
