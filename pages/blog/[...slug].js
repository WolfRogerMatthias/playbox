import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

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
                <article className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">{postData.title}</h1>
                    <div className="text-gray-500 mb-8">
                        {postData.date}
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <MDXRemote {...mdxSource} />
                    </div>
                </article>
            </Layout>
        );
    }
}

export default Post;

