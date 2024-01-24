// components/Post.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import { ParsedUrlQuery } from 'querystring';

interface PostProps {
    post: {
        title: string;
        date: string;
        content: string;
    };
}

// Extend ParsedUrlQuery to satisfy the constraint
interface Params extends ParsedUrlQuery {
    slug: string;
}

const Post: React.FC<PostProps> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
};

export default Post;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = getAllPosts().map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async ({ params }) => {
    if (!params || !params.slug) {
        return {
            notFound: true,
        };
    }

    const post = getPostBySlug(params.slug);
    return {
        props: { post },
    };
};
