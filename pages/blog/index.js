import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import styles from '../../styles/Home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

class BlogIndex extends React.Component {
  render() {
    const { allPostsData } = this.props;
    return (
      <Layout>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h1 className={styles.headingXl}>All Blog Posts</h1>
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

export default BlogIndex;
