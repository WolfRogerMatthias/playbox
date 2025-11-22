import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

class Home extends React.Component {
  render() {
    const { allPostsData } = this.props;
    return (
      <Layout>
        <section className={styles.headingMd}>
          <p>Hello, I'm Roger. This is my personal website!</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h2 className={styles.headingLg}>Blog</h2>
          <ul className={styles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={styles.listItem} key={id}>
                <Link href={`/blog/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={styles.lightText}>
                  {date}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}

export default Home;
