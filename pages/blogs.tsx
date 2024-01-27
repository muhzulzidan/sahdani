// pages/blogs.tsx

import Link from 'next/link';
import Layout from '@/components/layout';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/posts';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogProps {
    posts: {
        slug: string;
        title: string;
    }[];
}

const Blogs: React.FC<BlogProps> = ({ posts }) => {
    return (
        <Layout>
            <div className="container mx-auto p-4 py-12">
                <h1 className="text-3xl font-bold text-stone-800 mb-8">All Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {posts.map((post) => (
                        <Card key={post.slug}>
                            <CardHeader>
                                {/* You can add an icon or image here if needed */}
                                <CardTitle>{post.title}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <Button asChild>
                                    <Link href={`/blogs/${post.slug}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const posts = getAllPosts();

    return {
        props: {
            posts: posts.map((post) => ({
                slug: post.slug,
                title: post.title,
            })),
        },
    };
};

export default Blogs;
