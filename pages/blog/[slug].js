import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
    const mdxSource = await serialize(postData.content);
    return {
        props: {
            postData,
            mdxSource,
        },
    };
}

class Post extends React.Component {
    render() {
        const { postData, mdxSource } = this.props;
        return (
            <Layout>
                <article>
                    <h1 className={styles.headingXl}>{postData.title}</h1>
                    <div className={styles.lightText}>
                        {postData.date}
                    </div>
                    <div className={styles.content}>
                        <MDXRemote {...mdxSource} />
                    </div>
                </article>
            </Layout>
        );
    }
}

export default Post;
