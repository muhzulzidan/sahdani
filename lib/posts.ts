// lib/posts.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostData {
    slug: string;
    title: string;
    date: string;
    content: string;
    desc: string; // Add this line
}

export function getAllPosts(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            title: matterResult.data.title || '',
            date: matterResult.data.date || '',
            content: matterResult.content,
            desc: matterResult.data.desc || '', // Add this line
        };
    });
}

export function getPostBySlug(slug: string): PostData {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        content: matterResult.content,
        desc: matterResult.data.desc || '', // Add this line
    };
}
