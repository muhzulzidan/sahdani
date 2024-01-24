// pages/posts/[slug].tsx

import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/layout';
import SEO from '@/components/seo';

interface PostProps {
    post: {
        slug: string;
        title: string;
        date: string;
        content: string;
        desc: string;
    };
}



const Post: React.FC<PostProps> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <SEO description={post.desc} title={post.title} />
            <div className="container prose max-w-full py-12">
                <h1>{post.title}</h1>
                <p>{new Date(post.date).toLocaleDateString()}</p>
                <ReactMarkdown className="">{post.content}</ReactMarkdown>
            </div>
        </Layout>
    );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    if (!params || typeof params.slug !== 'string') {
        return {
            notFound: true,
        };
    }

    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: {
                ...post,
                date: post.date.toString(), // Convert the date to a string
            },
        },
    };
};