import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogIndex({ allPostsData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="pt-1">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">All Blog Posts</h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <ul className="list-none p-0 m-0">
          {filteredPosts.map(({ id, date, title, description }) => (
            <li className="mb-8 pb-8 border-b border-gray-100 last:border-0" key={id}>
              <Link href={`/blog/${id}`} className="text-xl font-bold hover:text-blue-600 transition-colors">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                {date}
              </small>
              {description && (
                <p className="mt-2 text-gray-600">
                  {description}
                </p>
              )}
            </li>
          ))}
        </ul>

        {filteredPosts.length === 0 && (
          <p className="text-gray-500 text-center py-8">No posts found matching your search.</p>
        )}
      </section>
    </Layout>
  );
}

